import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 200);
          return 100;
        }
        return p + 2.5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className="relative size-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0A0C10" }}
    >
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 40%, rgba(232,197,71,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Logo + brand */}
      <motion.div
        className="flex flex-col items-center gap-5"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Logo mark */}
        <div
          className="flex items-center justify-center rounded-2xl"
          style={{
            width: 72,
            height: 72,
            background: "#131620",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <svg width="36" height="26" viewBox="0 0 36 26" fill="none">
            <path
              d="M18 3C10 3 3.5 10 1 13C3.5 16 10 23 18 23C26 23 32.5 16 35 13C32.5 10 26 3 18 3Z"
              stroke="#E8C547"
              strokeWidth="1.75"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="18" cy="13" r="5.5" stroke="#E8C547" strokeWidth="1.75" fill="none" />
            <circle cx="18" cy="13" r="2.5" fill="#E8C547" opacity="0.8" />
          </svg>
        </div>

        {/* Brand */}
        <div className="flex flex-col items-center gap-1">
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 28,
              color: "#F0F2F8",
              letterSpacing: "-0.02em",
            }}
          >
            EyeEase
          </span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              color: "#5A617A",
              letterSpacing: "0.01em",
            }}
          >
            Eye health monitoring
          </motion.span>
        </div>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="absolute bottom-10 left-8 right-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <div
          className="w-full h-[2px] rounded-full overflow-hidden"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: "#E8C547" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.08 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
