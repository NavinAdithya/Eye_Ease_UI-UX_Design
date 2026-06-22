import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Square, AlertTriangle, CheckCircle } from "lucide-react";
import { CameraPreviewView } from "./CameraPreviewView";
import { type EyeMetrics, type FaceAlert } from "../services/faceAnalyzer";

interface LiveScanScreenProps {
  onBack: () => void;
}

// ── Session Alert Toast ───────────────────────────────────────────────────────

function SessionAlert({ alert, onDismiss }: { alert: FaceAlert; onDismiss: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 5000);
    return () => clearTimeout(t);
  }, [onDismiss]);

  const cfg = {
    danger: { border: "#FF4B4B", bg: "rgba(90,0,10,0.9)", Icon: AlertTriangle, iconColor: "#FF4B4B" },
    warning: { border: "#E8C547", bg: "rgba(80,60,0,0.9)", Icon: AlertTriangle, iconColor: "#E8C547" },
    healthy: { border: "#00E676", bg: "rgba(0,60,30,0.9)", Icon: CheckCircle, iconColor: "#00E676" },
  }[alert.severity];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.95 }}
      className="flex items-start gap-[12px] rounded-[16px] px-[14px] py-[12px]"
      style={{ background: cfg.bg, border: `1px solid ${cfg.border}40`, backdropFilter: "blur(12px)" }}
    >
      <cfg.Icon size={16} color={cfg.iconColor} className="mt-[2px] shrink-0" />
      <div>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, color: "#F5F6FA" }}>{alert.title}</p>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#8A8FA8" }}>{alert.message}</p>
      </div>
    </motion.div>
  );
}

// ── HUD Chip ─────────────────────────────────────────────────────────────────

function HudChip({ label, value, color, pulse }: { label: string; value: string; color: string; pulse?: boolean }) {
  return (
    <div
      className="flex flex-col items-center gap-[2px] px-[12px] py-[8px] rounded-[12px]"
      style={{ background: "rgba(9,11,15,0.75)", border: `1px solid ${color}30`, backdropFilter: "blur(12px)" }}
    >
      <div className="flex items-center gap-[4px]">
        {pulse && (
          <motion.div
            className="rounded-full"
            style={{ width: 5, height: 5, background: color }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        )}
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#8A8FA8", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</span>
      </div>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, fontSize: 14, color }}>
        {value}
      </span>
    </div>
  );
}

// ── Scan Line ────────────────────────────────────────────────────────────────

function ScanLine() {
  return (
    <motion.div
      className="absolute left-0 right-0 pointer-events-none"
      style={{ height: 1, background: "linear-gradient(90deg, transparent, #00D4FF, transparent)", boxShadow: "0 0 8px #00D4FF60", zIndex: 5 }}
      animate={{ top: ["10%", "90%", "10%"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
  );
}

// ── Corner Brackets ───────────────────────────────────────────────────────────

function CornerBrackets({ visible }: { visible: boolean }) {
  const bracketStyle = (top: boolean, left: boolean) => ({
    position: "absolute" as const,
    width: 20, height: 20,
    top: top ? "15%" : undefined,
    bottom: !top ? "15%" : undefined,
    left: left ? "22%" : undefined,
    right: !left ? "22%" : undefined,
    borderTop: top ? "2px solid #00D4FF" : undefined,
    borderBottom: !top ? "2px solid #00D4FF" : undefined,
    borderLeft: left ? "2px solid #00D4FF" : undefined,
    borderRight: !left ? "2px solid #00D4FF" : undefined,
    borderRadius: top && left ? "3px 0 0 0" : top && !left ? "0 3px 0 0" : !top && left ? "0 0 0 3px" : "0 0 3px 0",
    opacity: 0.9,
  });

  return (
    <AnimatePresence>
      {visible && (
        <>
          {[
            [true, true], [true, false], [false, true], [false, false],
          ].map(([top, left], i) => (
            <motion.div
              key={i}
              style={bracketStyle(top, left)}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ delay: i * 0.06, duration: 0.2 }}
            />
          ))}
        </>
      )}
    </AnimatePresence>
  );
}

// ── Score Progress Bar ────────────────────────────────────────────────────────

function ScoreBar({ score }: { score: number }) {
  const getColor = (s: number) => {
    if (s >= 80) return "#00E676";
    if (s >= 60) return "#E8C547";
    if (s >= 40) return "#A88B2A";
    return "#FF4B4B";
  };
  const color = getColor(score);

  return (
    <div className="w-full h-[6px] rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, #FF4B4B, #E8C547, ${color})`, boxShadow: `0 0 8px ${color}60` }}
        animate={{ width: `${score}%` }}
        transition={{ duration: 0.6 }}
      />
    </div>
  );
}

// ── Hold-to-Stop Button ───────────────────────────────────────────────────────

function HoldToStop({ onStop }: { onStop: () => void }) {
  const [holding, setHolding] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const holdRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const r = 26;
  const c = 2 * Math.PI * r;

  const startHold = () => {
    setHolding(true);
    const start = Date.now();
    holdRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / 2000, 1);
      setHoldProgress(p);
      if (p >= 1) {
        clearInterval(holdRef.current!);
        onStop();
      }
    }, 30);
  };

  const endHold = () => {
    setHolding(false);
    setHoldProgress(0);
    if (holdRef.current) clearInterval(holdRef.current);
  };

  return (
    <div className="flex flex-col items-center gap-[6px]">
      <div className="relative flex items-center justify-center">
        <svg className="absolute pointer-events-none" width="64" height="64" viewBox="0 0 64 64" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(255,75,75,0.2)" strokeWidth="2" />
          <motion.circle
            cx="32" cy="32" r={r}
            fill="none"
            stroke="#FF4B4B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={c}
            animate={{ strokeDashoffset: c - holdProgress * c }}
            transition={{ duration: 0.03 }}
          />
        </svg>
        <button
          className="w-full h-[56px] rounded-[100px] flex items-center justify-center gap-[12px] relative overflow-hidden"
          style={{
            width: 240,
            background: holding ? "rgba(255,75,75,0.25)" : "#FF4B4B",
            border: "1px solid rgba(255,75,75,0.4)",
            transition: "background 0.2s",
          }}
          onPointerDown={startHold}
          onPointerUp={endHold}
          onPointerLeave={endHold}
          onClick={!holding ? onStop : undefined}
        >
          <Square size={18} color="#F5F6FA" fill="#F5F6FA" />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 15, color: "#F5F6FA" }}>
            {holding ? `Stopping... ${Math.round(holdProgress * 100)}%` : "Stop Scan"}
          </span>
        </button>
      </div>
      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#3D4259" }}>
        Hold to stop
      </span>
    </div>
  );
}

// ── Main Live Scan ────────────────────────────────────────────────────────────

export function LiveScanScreen({ onBack }: LiveScanScreenProps) {
  const [metrics, setMetrics] = useState<EyeMetrics>({
    noFace: true, ear: 0, blinkCount: 0, blinkRate: 0, distance: 0, score: 0,
  });
  const [elapsed, setElapsed] = useState(0);
  const [activeAlert, setActiveAlert] = useState<FaceAlert | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [earThreshold] = useState(0.25);
  useEffect(() => {
    timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const metricsRef = useRef<EyeMetrics>(metrics);
  const handleMetrics = useCallback((m: EyeMetrics) => {
    setMetrics(m);
    metricsRef.current = m;
  }, []);
  const handleAlert = useCallback((a: FaceAlert) => setActiveAlert(a), []);

  const handleStop = useCallback(() => {
    onBack();
  }, [onBack]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const getDistColor = (d: number) => {
    if (d === 0) return "#8A8FA8";
    if (d < 30) return "#FF4B4B";
    if (d < 45) return "#E8C547";
    return "#00E676";
  };

  const insightText = metrics.noFace
    ? "Position your face in the camera view"
    : metrics.blinkRate < 10
    ? "Blink rate low · Try blinking more consciously"
    : metrics.distance > 60
    ? "Move closer · Optimal distance is 45–60cm"
    : "Blink rate optimal · Stay at current distance";

  return (
    <div className="size-full flex flex-col relative overflow-hidden" style={{ background: "#000" }}>
      {/* Full-screen camera */}
      <div className="absolute inset-0 z-0">
        <CameraPreviewView
          onMetricsUpdate={handleMetrics}
          onAlert={handleAlert}
          earThreshold={earThreshold}
        />
        {/* dark overlay for readability */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(9,11,15,0.5) 0%, transparent 25%, transparent 60%, rgba(9,11,15,0.85) 100%)" }} />
      </div>

      {/* Scan line */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <ScanLine />
      </div>

      {/* Corner brackets */}
      <div className="absolute inset-0 z-[3] pointer-events-none">
        <CornerBrackets visible={!metrics.noFace} />
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-[16px] pt-[16px] pb-[8px]">
        <button
          onClick={handleStop}
          className="flex items-center justify-center size-[40px] rounded-full"
          style={{ background: "rgba(9,11,15,0.6)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
        >
          <X size={16} color="#F5F6FA" />
        </button>

        {/* LIVE badge */}
        <div
          className="flex items-center gap-[6px] px-[12px] py-[5px] rounded-full"
          style={{ background: "rgba(9,11,15,0.7)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
        >
          <motion.div
            className="rounded-full"
            style={{ width: 7, height: 7, background: metrics.noFace ? "#8A8FA8" : "#00E676", boxShadow: metrics.noFace ? "none" : "0 0 6px rgba(0,230,118,0.8)" }}
            animate={!metrics.noFace ? { opacity: [1, 0.3, 1] } : {}}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, fontSize: 11, color: "#F5F6FA", letterSpacing: "0.1em" }}>
            {metrics.noFace ? "NO FACE" : "LIVE"}
          </span>
        </div>

        <div style={{ width: 40 }} />
      </div>

      {/* Alert toast */}
      <div className="relative z-10 px-[16px] mt-[8px]">
        <AnimatePresence mode="wait">
          {activeAlert && (
            <SessionAlert key={activeAlert.id} alert={activeAlert} onDismiss={() => setActiveAlert(null)} />
          )}
        </AnimatePresence>
      </div>

      {/* HUD chips — bottom of camera area */}
      <div className="absolute z-10 flex gap-[8px] justify-center px-[16px]" style={{ bottom: 240, left: 0, right: 0 }}>
        <HudChip label="EAR" value={metrics.ear.toFixed(2)} color="#E8C547" pulse />
        <HudChip label="Blinks" value={String(metrics.blinkCount)} color="#00D4FF" pulse={!metrics.noFace} />
        <HudChip
          label="Dist"
          value={metrics.distance > 0 ? `${metrics.distance}cm` : "--"}
          color={getDistColor(metrics.distance)}
          pulse={metrics.distance > 0}
        />
      </div>

      {/* Bottom sheet */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 rounded-t-[28px] flex flex-col px-[20px] pt-[20px] pb-[28px]"
        style={{ background: "rgba(17,19,24,0.95)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(16px)" }}
        initial={{ y: 80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.3 }}
      >
        {/* Handle */}
        <div className="w-[40px] h-[4px] rounded-full self-center mb-[16px]" style={{ background: "rgba(255,255,255,0.12)" }} />

        {/* Score row */}
        <div className="flex items-center justify-between mb-[10px]">
          <div>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#8A8FA8", letterSpacing: "0.06em", textTransform: "uppercase" }}>Session Score</span>
            <div className="flex items-baseline gap-[4px]">
              <motion.span
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 36, color: "#F5F6FA", letterSpacing: "-0.03em" }}
                animate={{ opacity: 1 }}
              >
                {metrics.score}
              </motion.span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#3D4259" }}>/100</span>
            </div>
          </div>

          {/* Timer */}
          <div className="flex flex-col items-end">
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#8A8FA8" }}>Duration</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, fontSize: 22, color: "#F5F6FA" }}>
              {formatTime(elapsed)}
            </span>
          </div>
        </div>

        <ScoreBar score={metrics.score} />

        {/* Insight text */}
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#8A8FA8", marginTop: 10, marginBottom: 16, textAlign: "center" }}>
          {insightText}
        </p>

        {/* Stop button */}
        <div className="flex justify-center">
          <HoldToStop onStop={handleStop} />
        </div>
      </motion.div>
    </div>
  );
}
