import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Settings, Sparkles, Droplets, Moon, TrendingUp, TrendingDown } from "lucide-react";
import { mockService, type DashboardData } from "../services/mockService";

interface DashboardScreenProps {
  onNavigate: (tab: string) => void;
}

// ── Arc Gauge ────────────────────────────────────────────────────────────────

function ArcGauge({ score, animated }: { score: number; animated: boolean }) {
  const size = 200;
  const cx = 100;
  const cy = 110;
  const outerR = 82;
  const trackR = 74;
  const fillR = 74;
  const stroke = 10;
  const startAngle = -210;
  const endAngle = 30;
  const spanAngle = endAngle - startAngle; // 240°

  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const arcPath = (r: number, start: number, end: number) => {
    const s = toRad(start);
    const e = toRad(end);
    const x1 = cx + r * Math.cos(s);
    const y1 = cy + r * Math.sin(s);
    const x2 = cx + r * Math.cos(e);
    const y2 = cy + r * Math.sin(e);
    const large = end - start > 180 ? 1 : 0;
    return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
  };

  const circumference = 2 * Math.PI * fillR;
  const arcFraction = spanAngle / 360;
  const arcLength = circumference * arcFraction;
  const fillProgress = animated ? score / 100 : 0;
  const dashOffset = arcLength - fillProgress * arcLength;

  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    if (!animated) return;
    let start = 0;
    const step = Math.ceil(score / 40);
    const interval = setInterval(() => {
      start += step;
      if (start >= score) {
        setDisplayScore(score);
        clearInterval(interval);
      } else {
        setDisplayScore(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [animated, score]);

  const getScoreColor = (s: number) => {
    if (s >= 80) return "#10B981";
    if (s >= 60) return "#F59E0B";
    return "#EF4444";
  };

  const scoreColor = getScoreColor(score);

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Outer decorative ring */}
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0">
        {/* dark track */}
        <path
          d={arcPath(outerR, startAngle, endAngle)}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth={14}
          strokeLinecap="round"
        />
        {/* inner track */}
        <path
          d={arcPath(trackR, startAngle, endAngle)}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={stroke}
          strokeLinecap="round"
        />
        {/* gradient fill — animated */}
        <defs>
          <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={scoreColor} stopOpacity="0.7" />
            <stop offset="100%" stopColor={scoreColor} stopOpacity="1" />
          </linearGradient>
          <filter id="arcGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <motion.path
          d={arcPath(fillR, startAngle, endAngle)}
          fill="none"
          stroke={`url(#arcGrad)`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${arcLength} ${circumference}`}
          initial={{ strokeDashoffset: arcLength }}
          animate={{ strokeDashoffset: animated ? dashOffset : arcLength }}
          transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 }}
          filter="url(#arcGlow)"
        />
      </svg>

      {/* Center text */}
      <div className="flex flex-col items-center" style={{ marginTop: 8 }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 52, color: "#F5F6FA", letterSpacing: "-0.03em", lineHeight: 1 }}>
          {displayScore}
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#3D4259", marginTop: 2 }}>/100</span>
        <div className="flex items-center gap-[4px] mt-[6px]">
          <TrendingUp size={12} color="#10B981" />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#10B981" }}>+3 from yesterday</span>
        </div>
      </div>

      {/* Subtle inner glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 60, height: 60, background: scoreColor, filter: "blur(20px)", opacity: 0.08 }}
      />
    </div>
  );
}

// ── Metric Chip ──────────────────────────────────────────────────────────────

function MetricChip({
  color, value, unit, label, badge, trend,
}: {
  color: string; value: number; unit: string; label: string; badge: "NORMAL" | "LOW" | "ALERT"; trend: number[];
}) {
  const badgeColors = { NORMAL: "#10B981", LOW: "#F59E0B", ALERT: "#EF4444" };

  const minT = Math.min(...trend);
  const maxT = Math.max(...trend);
  const norm = (v: number) => maxT === minT ? 0.5 : (v - minT) / (maxT - minT);
  const w = 48;
  const h = 20;
  const pts = trend.map((v, i) => `${(i / (trend.length - 1)) * w},${h - norm(v) * h}`).join(" ");

  return (
    <div
      className="flex-1 rounded-[20px] p-[16px] relative overflow-hidden"
      style={{ background: "#111318", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Sparkline bg */}
      <div className="absolute bottom-[8px] right-[8px] opacity-20">
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
          <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="flex items-center gap-[6px] mb-[8px]">
        <div
          className="rounded-full"
          style={{ width: 7, height: 7, background: color, opacity: 0.8 }}
        />
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#8A8FA8", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {label}
        </span>
      </div>

      <div className="flex items-baseline gap-[2px] mb-[8px]">
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, fontSize: 24, color: "#F5F6FA" }}>{value}</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#8A8FA8" }}>{unit}</span>
      </div>

      <div
        className="inline-flex px-[8px] py-[2px] rounded-full"
        style={{ background: `${badgeColors[badge]}18`, border: `1px solid ${badgeColors[badge]}40` }}
      >
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: badgeColors[badge], letterSpacing: "0.08em" }}>{badge}</span>
      </div>
    </div>
  );
}

// ── Countdown Timer ──────────────────────────────────────────────────────────

function CountdownTimer() {
  const BREAK_INTERVAL = 20 * 60;
  const [seconds, setSeconds] = useState(BREAK_INTERVAL - (14 * 60 + 32));

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s <= 0 ? BREAK_INTERVAL : s - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const progress = 1 - seconds / BREAK_INTERVAL;

  return (
    <div className="flex items-center gap-[10px]">
      <div className="relative flex items-center justify-center" style={{ width: 32, height: 32 }}>
        <svg width="32" height="32" viewBox="0 0 32 32" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="16" cy="16" r="13" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          <motion.circle
            cx="16" cy="16" r="13"
            fill="none"
            stroke="#E8C547"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 13}`}
            animate={{ strokeDashoffset: (1 - progress) * 2 * Math.PI * 13 }}
            transition={{ duration: 0.5 }}
          />
        </svg>
        <span className="absolute" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 7, color: "#E8C547" }}>
          {mins}m
        </span>
      </div>
      <div>
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#8A8FA8" }}>Next break in</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, fontSize: 14, color: "#E8C547", display: "block" }}>
          {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

// ── Screen Time Bar ──────────────────────────────────────────────────────────

const timeBlocks = [
  { pct: 10, color: "#10B981" }, { pct: 14, color: "#10B981" }, { pct: 12, color: "#10B981" },
  { pct: 16, color: "#F59E0B" }, { pct: 18, color: "#F59E0B" }, { pct: 14, color: "#EF4444" },
  { pct: 10, color: "#F59E0B" }, { pct: 6, color: "#10B981" },
];

function ScreenTimeBar({ screenTime }: { screenTime: string }) {
  return (
    <div
      className="rounded-[20px] px-[20px] py-[16px]"
      style={{ background: "#111318", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="flex items-center justify-between mb-[12px]">
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#8A8FA8" }}>Screen Time</span>
        <div className="flex items-center gap-[6px]">
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, fontSize: 16, color: "#F5F6FA" }}>{screenTime}</span>
          <div className="flex items-center gap-[2px] px-[6px] py-[2px] rounded-full" style={{ background: "rgba(245,158,11,0.1)" }}>
            <TrendingUp size={10} color="#F59E0B" />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#F59E0B" }}>+1.4h vs avg</span>
          </div>
        </div>
      </div>
      <div className="flex gap-[2px] rounded-full overflow-hidden h-[8px]">
        {timeBlocks.map((block, i) => (
          <motion.div
            key={i}
            style={{ background: block.color, flex: block.pct / 100 }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5 + i * 0.06, duration: 0.3, ease: "easeOut" }}
          />
        ))}
      </div>
      <div className="flex gap-[12px] mt-[8px]">
        {[{ color: "#10B981", label: "Healthy" }, { color: "#F59E0B", label: "Caution" }, { color: "#EF4444", label: "Overuse" }].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-[4px]">
            <div className="w-[6px] h-[6px] rounded-full" style={{ background: color }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#8A8FA8" }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Recommendation Card ──────────────────────────────────────────────────────

function RecommendationCard({
  icon, title, children, delay, accentColor,
}: {
  icon: React.ReactNode; title: string; children: React.ReactNode; delay: number; accentColor: string;
}) {
  return (
    <motion.div
      className="rounded-[20px] pl-[4px] pr-[16px] py-[16px] flex gap-[14px] relative overflow-hidden"
      style={{ background: "#111318", border: "1px solid rgba(255,255,255,0.06)" }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35 }}
    >
      <div className="w-[3px] rounded-full shrink-0" style={{ background: accentColor, opacity: 0.9 }} />
      <div className="flex items-start gap-[10px] flex-1">
        <div className="mt-[1px]">{icon}</div>
        <div className="flex-1 min-w-0">
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: "#F5F6FA", marginBottom: 4 }}>
            {title}
          </p>
          {children}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────

export function DashboardScreen({ onNavigate }: DashboardScreenProps) {
  const [data, setData] = useState<DashboardData | null>(null);
  const [gaugeAnimated, setGaugeAnimated] = useState(false);
  const [camActive] = useState(true);

  useEffect(() => {
    mockService.getDashboard().then((d) => {
      setData(d);
      setTimeout(() => setGaugeAnimated(true), 100);
    });
  }, []);

  if (!data) {
    return (
      <div className="size-full flex items-center justify-center" style={{ background: "#090B0F" }}>
        <motion.div
          className="rounded-full border-2"
          style={{ width: 40, height: 40, borderColor: "#E8C547", borderTopColor: "transparent" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <div className="size-full flex flex-col overflow-hidden" style={{ background: "#090B0F" }}>
      <div className="flex-1 overflow-y-auto pb-[100px]">

        {/* Header */}
        <div className="flex items-center justify-between px-[16px] pt-[20px] pb-[8px]">
          <div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 22, color: "#F5F6FA", letterSpacing: "-0.03em" }}>
              Hi, {data.userName} 👋
            </span>
          </div>
          <div className="flex items-center gap-[10px]">
            {/* Live status dot */}
            <div className="flex items-center gap-[6px] px-[8px] py-[4px] rounded-full" style={{ background: "rgba(16,185,129,0.1)" }}>
              <div
                className="rounded-full"
                style={{ width: 6, height: 6, background: camActive ? "#10B981" : "#8A8FA8" }}
              />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#10B981" }}>Live</span>
            </div>
            <button
              onClick={() => onNavigate("profile")}
              className="flex items-center justify-center size-[40px] rounded-full"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Settings size={18} color="#8A8FA8" />
            </button>
          </div>
        </div>

        {/* Score hero card */}
        <div
          className="mx-[16px] rounded-[20px] flex flex-col items-center py-[28px] relative overflow-hidden"
          style={{ background: "#111318", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Gold ambient glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(232,197,71,0.05) 0%, transparent 70%)" }} />

          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#8A8FA8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
            Eye Health Score
          </span>
          <ArcGauge score={data.score} animated={gaugeAnimated} />
        </div>

        {/* Metric chips */}
        <div className="flex gap-[10px] px-[16px] mt-[10px]">
          <MetricChip
            color="#E8C547"
            value={data.blinkRate}
            unit="/min"
            label="Blink Rate"
            badge={data.blinkRate >= 12 ? "NORMAL" : data.blinkRate >= 8 ? "LOW" : "ALERT"}
            trend={[11, 13, 10, 14, 12, 15, data.blinkRate]}
          />
          <MetricChip
            color="#00D4FF"
            value={data.distance}
            unit="cm"
            label="Distance"
            badge={data.distance >= 45 ? "NORMAL" : data.distance >= 30 ? "LOW" : "ALERT"}
            trend={[55, 50, 48, 52, data.distance, 54, data.distance]}
          />
        </div>

        {/* Screen time */}
        <div className="px-[16px] mt-[10px]">
          <ScreenTimeBar screenTime={data.screenTime} />
        </div>

        {/* Smart Insights */}
        <div className="px-[16px] mt-[20px] mb-[12px] flex items-center gap-[8px]">
          <Sparkles size={15} color="#5A617A" />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 15, color: "#F0F2F8" }}>
            Smart Insights
          </span>
        </div>

        <div className="px-[16px] flex flex-col gap-[8px]">
          <RecommendationCard icon={<span style={{ fontSize: 16 }}>👁</span>} title="20-20-20 Rule" delay={0.15} accentColor="#E8C547">
            <div className="flex items-center justify-between">
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#8A8FA8", lineHeight: 1.5, flex: 1 }}>
                Every 20 min, look 20 ft away for 20 sec.
              </p>
              <div className="ml-[12px] shrink-0">
                <CountdownTimer />
              </div>
            </div>
          </RecommendationCard>

          <RecommendationCard icon={<Droplets size={14} color="#00D4FF" />} title="Hydration Reminder" delay={0.22} accentColor="#00D4FF">
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#8A8FA8", lineHeight: 1.5 }}>
              Staying hydrated helps maintain natural tear production and reduces dryness.
            </p>
          </RecommendationCard>

          <RecommendationCard icon={<Moon size={14} color="#8B5CF6" />} title="Blue Light Filter: Active" delay={0.29} accentColor="#8B5CF6">
            <div className="flex items-center gap-[6px]">
              <div className="w-[6px] h-[6px] rounded-full" style={{ background: "#10B981" }} />
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#8A8FA8" }}>
                Filter active · Reduces eye strain by 32%
              </p>
            </div>
          </RecommendationCard>
        </div>
      </div>
    </div>
  );
}
