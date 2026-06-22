import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Eye, Ruler, BarChart2, Shield, Activity, X } from "lucide-react";

interface OnboardingScreenProps {
  onComplete: () => void;
}

const slides = [
  {
    icon: Eye,
    iconColor: "#E8C547",
    title: "Monitor Your\nEye Health",
    subtitle: "AI-powered. Real-time. Effortless.",
    body: "Advanced camera monitoring keeps a close watch on your blink rate and screen distance, protecting your eyes during long work sessions.",
  },
  {
    icon: Activity,
    iconColor: "#00D4FF",
    title: "Personalized\nInsights",
    subtitle: "Every day. Every session.",
    body: "AI-personalized insights guide you toward healthier screen habits, protecting your vision for the long term.",
  },
];

const features = [
  { icon: Eye, label: "Blink Monitor", color: "#E8C547" },
  { icon: Ruler, label: "Distance AI", color: "#00D4FF" },
  { icon: BarChart2, label: "Health Score", color: "#10B981" },
  { icon: Shield, label: "Eye Safety", color: "#E8C547" },
];

function SlideIllustration({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="flex items-center justify-center" style={{ width: 280, height: 280 }}>
        {/* Clean eye health dashboard illustration */}
        <div className="relative flex items-center justify-center">
          {/* Outer ring */}
          <div
            className="absolute rounded-full"
            style={{
              width: 220,
              height: 220,
              border: "1px solid rgba(232,197,71,0.12)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 170,
              height: 170,
              border: "1px solid rgba(232,197,71,0.18)",
            }}
          />
          {/* Center card */}
          <div
            className="relative flex flex-col items-center justify-center rounded-3xl gap-3"
            style={{
              width: 130,
              height: 130,
              background: "#131620",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <svg width="42" height="30" viewBox="0 0 42 30" fill="none">
              <path
                d="M21 3C12 3 5 10 2 15C5 20 12 27 21 27C30 27 37 20 40 15C37 10 30 3 21 3Z"
                stroke="#E8C547"
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="21" cy="15" r="6" stroke="#E8C547" strokeWidth="1.5" fill="none" />
              <circle cx="21" cy="15" r="2.5" fill="#E8C547" />
            </svg>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#5A617A" }}>
              Monitoring
            </span>
          </div>
          {/* Metric badges */}
          {[
            { label: "Blink Rate", value: "14/min", angle: -45, r: 100, color: "#E8C547" },
            { label: "Distance", value: "52 cm", angle: 45, r: 100, color: "#00D4FF" },
            { label: "Score", value: "87", angle: 180, r: 90, color: "#10B981" },
          ].map(({ label, value, angle, r, color }) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <motion.div
                key={label}
                className="absolute flex flex-col items-center rounded-2xl px-3 py-2"
                style={{
                  left: `calc(50% + ${r * Math.cos(rad)}px - 36px)`,
                  top: `calc(50% + ${r * Math.sin(rad)}px - 22px)`,
                  background: "#131620",
                  border: `1px solid ${color}22`,
                  minWidth: 72,
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + Math.abs(angle) / 500, duration: 0.4 }}
              >
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#5A617A" }}>{label}</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, color, marginTop: 1 }}>{value}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center" style={{ width: 280, height: 280 }}>
      <div className="relative flex flex-col items-center gap-3">
        {/* Score card */}
        <motion.div
          className="rounded-3xl px-8 py-6 flex flex-col items-center gap-1"
          style={{
            background: "#131620",
            border: "1px solid rgba(255,255,255,0.08)",
            minWidth: 180,
          }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#5A617A", letterSpacing: "0.05em" }}>
            EYE HEALTH SCORE
          </span>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 44, color: "#E8C547", letterSpacing: "-0.02em" }}>
            87
          </span>
          <div className="flex items-center gap-1.5 mt-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#E8C547" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#5A617A" }}>Good — keep it up</span>
          </div>
        </motion.div>
        {/* Mini charts row */}
        <div className="flex gap-2">
          {[
            { label: "Blink", color: "#E8C547", bars: [0.5, 0.7, 0.6, 0.8, 0.9, 0.7, 0.85] },
            { label: "Distance", color: "#00D4FF", bars: [0.8, 0.7, 0.9, 0.6, 0.75, 0.8, 0.9] },
          ].map(({ label, color, bars }) => (
            <motion.div
              key={label}
              className="flex flex-col gap-1.5 rounded-2xl p-3"
              style={{ background: "#131620", border: "1px solid rgba(255,255,255,0.06)", minWidth: 84 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#5A617A" }}>{label}</span>
              <div className="flex items-end gap-[2px]" style={{ height: 28 }}>
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{ height: `${h * 100}%`, background: color, opacity: 0.7 + h * 0.3 }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [slide, setSlide] = useState(0);

  const next = () => {
    if (slide < slides.length - 1) setSlide(slide + 1);
    else onComplete();
  };

  const s = slides[slide];
  const accentColor = s.iconColor;

  return (
    <div className="relative size-full flex flex-col overflow-hidden" style={{ background: "#0A0C10" }}>
      {/* Subtle background tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 30%, ${accentColor}08 0%, transparent 70%)`,
          transition: "all 0.5s ease",
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-5">
        <button
          onClick={onComplete}
          className="flex items-center justify-center rounded-full"
          style={{
            width: 36,
            height: 36,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <X size={14} color="#5A617A" />
        </button>
        <button onClick={onComplete}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#5A617A" }}>Skip</span>
        </button>
      </div>

      {/* Hero illustration */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <SlideIllustration index={slide} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 px-6 pb-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Headline */}
            <div className="mb-3">
              {s.title.split("\n").map((line, i) => (
                <div key={i}>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: 30,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.15,
                      color: i === 1 ? accentColor : "#F0F2F8",
                      display: "block",
                    }}
                  >
                    {line}
                  </span>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#5A617A", lineHeight: 1.6, marginBottom: 20 }}>
              {s.body}
            </p>

            {/* Feature chips on second slide */}
            {slide === 1 && (
              <div className="grid grid-cols-4 gap-2 mb-5">
                {features.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 py-3 rounded-2xl"
                    style={{
                      background: "#131620",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <Icon size={14} color={color} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#5A617A", textAlign: "center", lineHeight: 1.2 }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Nav row */}
        <div className="flex items-center gap-4 mt-2">
          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <motion.div
                key={i}
                className="rounded-full"
                animate={{
                  width: i === slide ? 20 : 6,
                  background: i === slide ? accentColor : "rgba(255,255,255,0.15)",
                }}
                transition={{ duration: 0.25 }}
                style={{ height: 6 }}
              />
            ))}
          </div>
          {/* CTA */}
          <motion.button
            onClick={next}
            className="flex-1 h-14 flex items-center justify-center rounded-2xl gap-2"
            style={{ background: accentColor }}
            whileTap={{ scale: 0.98 }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: 16,
                color: "#090B0F",
              }}
            >
              {slide < slides.length - 1 ? "Next" : "Get Started"}
            </span>
            <ChevronRight size={18} color="#090B0F" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
