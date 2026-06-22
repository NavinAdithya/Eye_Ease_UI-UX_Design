import { useEffect, useRef, useState } from "react";
import { FaceAnalyzer, type EyeMetrics, type FaceAlert } from "../services/faceAnalyzer";

type CameraStatus = "loading-models" | "requesting-camera" | "ready" | "error";

interface CameraPreviewViewProps {
  onMetricsUpdate: (metrics: EyeMetrics) => void;
  onAlert?: (alert: FaceAlert) => void;
  earThreshold?: number;
}

/**
 * Equivalent to CameraPreviewView.kt (AndroidView Composable).
 *
 * DisposableEffect → useEffect with cleanup.
 * ProcessCameraProvider + LENS_FACING_FRONT → getUserMedia({ facingMode: "user" }).
 * ImageAnalysis(STRATEGY_KEEP_ONLY_LATEST) → requestAnimationFrame loop in FaceAnalyzer
 *   that starts the next frame only after the current one resolves (no frame queuing).
 */
export function CameraPreviewView({ onMetricsUpdate, onAlert, earThreshold = 0.25 }: CameraPreviewViewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const analyzerRef = useRef<FaceAnalyzer | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [status, setStatus] = useState<CameraStatus>("loading-models");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    let cancelled = false;

    const analyzer = new FaceAnalyzer();
    analyzer.earThreshold = earThreshold;
    analyzerRef.current = analyzer;

    // Wire metric and alert flows → callbacks
    const unsubMetrics = analyzer.onMetrics(onMetricsUpdate);
    const unsubAlerts = onAlert ? analyzer.onAlert(onAlert) : () => {};

    async function init() {
      try {
        // 1. Load TinyFaceDetector + TinyFaceLandmark models
        setStatus("loading-models");
        await analyzer.loadModels();
        if (cancelled) return;

        // 2. Acquire front-facing camera stream
        setStatus("requesting-camera");
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user", width: { ideal: 640 }, height: { ideal: 480 } },
          audio: false,
        });
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }

        streamRef.current = stream;

        const video = videoRef.current!;
        video.srcObject = stream;
        await video.play();

        // 3. Bind analyzer to video (mirrors onResume/bind in CameraPreviewView.kt)
        analyzer.start(video);
        setStatus("ready");
      } catch (err) {
        if (!cancelled) {
          setStatus("error");
          setErrorMsg(
            err instanceof Error
              ? err.message
              : "Camera or model loading failed"
          );
        }
      }
    }

    init();

    // Cleanup — mirrors DisposableEffect onDispose / unbindAll
    return () => {
      cancelled = true;
      analyzer.stop();
      streamRef.current?.getTracks().forEach((t) => t.stop());
      unsubMetrics();
      unsubAlerts();
    };
  }, []); // intentionally no deps — mount/unmount only

  // earThreshold is updatable from settings without remounting
  useEffect(() => {
    if (analyzerRef.current) {
      analyzerRef.current.earThreshold = earThreshold;
    }
  }, [earThreshold]);

  return (
    <div className="relative w-full h-full" style={{ background: "#0e0e0e" }}>
      {/* Actual camera video — mirrored (front cam) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: "scaleX(-1)",
          opacity: status === "ready" ? 1 : 0,
          transition: "opacity 0.4s",
        }}
        playsInline
        muted
      />

      {/* Status overlay */}
      {status !== "ready" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-[12px] z-10">
          {status === "error" ? (
            <>
              <span style={{ fontSize: 32 }}>⚠️</span>
              <p style={{ fontSize: 14, fontFamily: "Inter, sans-serif", color: "#FFB4AB", textAlign: "center", padding: "0 24px" }}>
                {errorMsg}
              </p>
              <p style={{ fontSize: 12, fontFamily: "Inter, sans-serif", color: "#8B949E", textAlign: "center" }}>
                Allow camera access and refresh
              </p>
            </>
          ) : (
            <>
              <div
                className="w-[40px] h-[40px] rounded-full border-2 border-t-transparent animate-spin"
                style={{ borderColor: "#FFE08A", borderTopColor: "transparent" }}
              />
              <p style={{ fontSize: 13, fontFamily: "Inter, sans-serif", color: "#CFC6B3" }}>
                {status === "loading-models" ? "Loading face detection models…" : "Starting camera…"}
              </p>
            </>
          )}
        </div>
      )}

      {/* Simulated noise grain while loading */}
      {status === "loading-models" && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: "linear-gradient(135deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%)",
          }}
        />
      )}
    </div>
  );
}
