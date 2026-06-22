import * as faceapi from "face-api.js";
import { EarCalculator } from "./earCalculator";
import { computeScore } from "./scoreCalculator";

export interface EyeMetrics {
  noFace: boolean;
  ear: number;
  blinkCount: number;
  blinkRate: number;
  distance: number;
  score: number;
}

export type AlertSeverity = "danger" | "warning" | "healthy";

export interface FaceAlert {
  id: string;
  severity: AlertSeverity;
  title: string;
  message: string;
  timestamp: number;
}

type MetricsCb = (m: EyeMetrics) => void;
type AlertCb = (a: FaceAlert) => void;

// Blink state machine
type BlinkState = "OPEN" | "CLOSING" | "CLOSED";

const MODELS_URL = "https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights";
const RATE_WINDOW_MS = 60_000;
const DEBOUNCE_FRAMES = 3;
const ALERT_THROTTLE_MS = 60_000;
// Distance estimate: focalLength * knownFaceWidthCm / boxWidthPx
const FOCAL_LENGTH = 800;
const KNOWN_FACE_WIDTH_CM = 14;

export class FaceAnalyzer {
  // Configurable from settings
  earThreshold = 0.25;

  private earCalc = new EarCalculator();
  private blinkState: BlinkState = "OPEN";
  private closingFrames = 0;
  private blinkCount = 0;
  private blinkTimestamps: number[] = [];

  private alertLastSent = new Map<string, number>();

  private metricsCbs: MetricsCb[] = [];
  private alertCbs: AlertCb[] = [];

  private rafId: number | null = null;
  private videoEl: HTMLVideoElement | null = null;
  private modelsLoaded = false;
  private running = false;

  // ── Public subscription API (mirrors SharedFlow) ──────────────────────────

  onMetrics(cb: MetricsCb): () => void {
    this.metricsCbs.push(cb);
    return () => { this.metricsCbs = this.metricsCbs.filter((c) => c !== cb); };
  }

  onAlert(cb: AlertCb): () => void {
    this.alertCbs.push(cb);
    return () => { this.alertCbs = this.alertCbs.filter((c) => c !== cb); };
  }

  // ── Lifecycle ─────────────────────────────────────────────────────────────

  async loadModels(): Promise<void> {
    if (this.modelsLoaded) return;
    await Promise.all([
      faceapi.loadTinyFaceDetectorModel(MODELS_URL),
      faceapi.loadFaceLandmarkTinyModel(MODELS_URL),
    ]);
    this.modelsLoaded = true;
  }

  start(video: HTMLVideoElement): void {
    this.videoEl = video;
    this.running = true;
    this.scheduleFrame();
  }

  stop(): void {
    this.running = false;
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.earCalc.reset();
    this.blinkState = "OPEN";
    this.closingFrames = 0;
    this.blinkCount = 0;
    this.blinkTimestamps = [];
    this.videoEl = null;
  }

  // ── Frame processing loop ─────────────────────────────────────────────────

  private scheduleFrame(): void {
    if (!this.running) return;
    this.rafId = requestAnimationFrame(this.processFrame);
  }

  private processFrame = async (): Promise<void> => {
    if (!this.running) return;
    const video = this.videoEl;

    if (!video || !this.modelsLoaded || video.readyState < 2 || video.paused) {
      this.scheduleFrame();
      return;
    }

    try {
      // detectSingleFace is equivalent to ImageAnalysis.Analyzer processing one ImageProxy
      const result = await faceapi
        .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions({ scoreThreshold: 0.5, inputSize: 320 }))
        .withFaceLandmarks(true); // true → tiny landmark model (PERFORMANCE_MODE_FAST)

      if (!result) {
        // No face — emit noFace=true (mirrors "emit EyeMetrics(noFace=true)")
        this.emitMetrics({ noFace: true, ear: 0, blinkCount: this.blinkCount, blinkRate: 0, distance: 0, score: 0 });
      } else {
        // a. Eye landmark PointF positions
        const leftPts = result.landmarks.getLeftEye();
        const rightPts = result.landmarks.getRightEye();

        // b. Smoothed EAR via EarCalculator
        const ear = this.earCalc.compute(leftPts, rightPts);

        // c. Blink state machine with 3-frame debounce
        this.updateBlinkStateMachine(ear);

        // d. Rolling 60s blink rate
        const now = Date.now();
        this.blinkTimestamps = this.blinkTimestamps.filter((t) => now - t < RATE_WINDOW_MS);
        const blinkRate = this.blinkTimestamps.length;

        // e. Distance: (14cm * 800px) / boundingBox.width()
        const boxWidth = result.detection.box.width;
        const distance = boxWidth > 0 ? Math.round((KNOWN_FACE_WIDTH_CM * FOCAL_LENGTH) / boxWidth) : 0;
        const clampedDistance = Math.min(distance, 150);

        // f. Score
        const score = computeScore(blinkRate, clampedDistance);

        // g. Emit metrics
        const metrics: EyeMetrics = {
          noFace: false,
          ear: parseFloat(ear.toFixed(3)),
          blinkCount: this.blinkCount,
          blinkRate,
          distance: clampedDistance,
          score,
        };
        this.emitMetrics(metrics);

        // Alert threshold check (throttled — same type max 1 per 60s)
        this.checkAlerts(blinkRate, clampedDistance, now);
      }
    } catch {
      // Skip frame on any detection error (mirrors try/finally with ImageProxy.close())
    }

    this.scheduleFrame();
  };

  // ── Blink state machine ───────────────────────────────────────────────────

  private updateBlinkStateMachine(ear: number): void {
    switch (this.blinkState) {
      case "OPEN":
        if (ear < this.earThreshold) {
          this.blinkState = "CLOSING";
          this.closingFrames = 1;
        }
        break;

      case "CLOSING":
        if (ear < this.earThreshold) {
          this.closingFrames++;
          if (this.closingFrames >= DEBOUNCE_FRAMES) {
            this.blinkState = "CLOSED";
            this.blinkCount++;
            this.blinkTimestamps.push(Date.now());
          }
        } else {
          // Eye reopened before debounce — not a real blink
          this.blinkState = "OPEN";
          this.closingFrames = 0;
        }
        break;

      case "CLOSED":
        if (ear >= this.earThreshold) {
          this.blinkState = "OPEN";
          this.closingFrames = 0;
        }
        break;
    }
  }

  // ── Alert throttle logic ──────────────────────────────────────────────────

  private checkAlerts(blinkRate: number, distance: number, now: number): void {
    const send = (key: string, alert: Omit<FaceAlert, "id" | "timestamp">) => {
      const last = this.alertLastSent.get(key) ?? 0;
      if (now - last >= ALERT_THROTTLE_MS) {
        this.alertLastSent.set(key, now);
        this.emitAlert({ ...alert, id: `${key}-${now}`, timestamp: now });
      }
    };

    if (blinkRate < 8) {
      send("blink-danger", {
        severity: "danger",
        title: "Eye Strain Detected",
        message: `Blink rate dropped to ${blinkRate}/min`,
      });
    } else if (blinkRate < 12) {
      send("blink-warning", {
        severity: "warning",
        title: "Blink Rate Low",
        message: "Try blinking more consciously",
      });
    } else if (blinkRate >= 15) {
      send("blink-healthy", {
        severity: "healthy",
        title: "Great Blink Rate!",
        message: `${blinkRate} blinks/min — excellent!`,
      });
    }

    if (distance > 0) {
      if (distance < 30) {
        send("distance-danger", {
          severity: "danger",
          title: "Too Close to Screen",
          message: "Move back to at least 45 cm",
        });
      } else if (distance < 45) {
        send("distance-warning", {
          severity: "warning",
          title: "Screen Too Close",
          message: `Current distance: ${distance}cm`,
        });
      }
    }
  }

  // ── Emit helpers ──────────────────────────────────────────────────────────

  private emitMetrics(m: EyeMetrics): void {
    this.metricsCbs.forEach((cb) => cb(m));
  }

  private emitAlert(a: FaceAlert): void {
    this.alertCbs.forEach((cb) => cb(a));
  }
}
