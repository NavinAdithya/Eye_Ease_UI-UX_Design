import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Moon, Bell, Eye, Shield, Settings, LogOut, Sliders, Crown } from "lucide-react";
import { mockService, type UserProfile } from "../services/mockService";
import imgUserAvatar from "../../imports/IMG_0760.jpg";

interface ProfileScreenProps {
  onLogout: () => void;
}

// ── Gold Toggle ───────────────────────────────────────────────────────────────

function GoldToggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className="relative rounded-full transition-colors duration-300"
      style={{ width: 48, height: 26, background: value ? "#E8C547" : "#1A1D24", border: `1px solid ${value ? "#E8C547" : "rgba(255,255,255,0.1)"}` }}
    >
      <motion.div
        className="absolute top-[3px] rounded-full"
        style={{
          width: 18, height: 18,
          background: value ? "#090B0F" : "#3D4259",
          boxShadow: value ? "0 0 6px rgba(232,197,71,0.5)" : "none",
        }}
        animate={{ left: value ? 26 : 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
  );
}

// ── Setting Row ───────────────────────────────────────────────────────────────

function SettingRow({ icon, label, iconColor, value, onToggle, onPress }: {
  icon: React.ReactNode; label: string; iconColor: string;
  value?: boolean; onToggle?: (v: boolean) => void; onPress?: () => void;
}) {
  return (
    <div
      role={onPress ? "button" : undefined}
      tabIndex={onPress ? 0 : undefined}
      className="flex items-center gap-[12px] px-[16px] py-[14px] rounded-[16px] mb-[6px] cursor-pointer"
      style={{ background: "#111318", border: "1px solid rgba(255,255,255,0.05)" }}
      onClick={onPress}
      onKeyDown={onPress ? (e) => e.key === "Enter" && onPress() : undefined}
    >
      <div
        className="flex items-center justify-center size-[36px] rounded-full"
        style={{ background: `${iconColor}18` }}
      >
        {icon}
      </div>
      <span className="flex-1" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#F5F6FA" }}>{label}</span>
      {onToggle !== undefined && value !== undefined ? (
        <GoldToggle value={value} onChange={onToggle} />
      ) : (
        <span style={{ fontSize: 18, color: "#3D4259" }}>›</span>
      )}
    </div>
  );
}

// ── Crown Badge ───────────────────────────────────────────────────────────────

function PremiumBadge() {
  return (
    <motion.div
      className="flex items-center gap-[7px] px-[14px] py-[6px] rounded-full"
      style={{ background: "linear-gradient(135deg, rgba(232,197,71,0.15), rgba(168,139,42,0.15))", border: "1px solid rgba(232,197,71,0.3)" }}
    >
      <motion.div
        animate={{ rotate: [0, 8, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <Crown size={13} color="#E8C547" fill="#E8C547" />
      </motion.div>
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 12, color: "#E8C547", letterSpacing: "0.08em" }}>
        PREMIUM MEMBER
      </span>
      {/* Shimmer */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
        style={{ background: "linear-gradient(105deg, transparent 40%, rgba(232,197,71,0.2) 50%, transparent 60%)" }}
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
      />
    </motion.div>
  );
}

// ── Stats Card ────────────────────────────────────────────────────────────────

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="flex-1 flex flex-col items-center gap-[4px] py-[14px] rounded-[16px]"
      style={{ background: "#111318", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 22, color: "#F5F6FA" }}>
        {value}
      </span>
      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#8A8FA8", textAlign: "center", letterSpacing: "0.04em" }}>
        {label}
      </span>
    </div>
  );
}

// ── Custom Slider ─────────────────────────────────────────────────────────────

function GoldSlider({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="relative w-full h-[24px] flex items-center">
      <div className="relative w-full h-[4px] rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
        <div
          className="absolute h-full rounded-full"
          style={{ width: `${value}%`, background: "linear-gradient(90deg, #A88B2A, #E8C547)", boxShadow: "0 0 6px rgba(232,197,71,0.4)" }}
        />
        <motion.div
          className="absolute top-1/2 rounded-full"
          style={{
            width: 18, height: 18,
            left: `${value}%`,
            transform: "translate(-50%, -50%)",
            background: "#E8C547",
            boxShadow: "0 0 10px rgba(232,197,71,0.6)",
          }}
          whileTap={{ scale: 1.3 }}
        />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute inset-0 w-full opacity-0 cursor-pointer"
      />
    </div>
  );
}

// ── Main Profile ──────────────────────────────────────────────────────────────

export function ProfileScreen({ onLogout }: ProfileScreenProps) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [distanceAlert, setDistanceAlert] = useState(true);
  const [sensitivity, setSensitivity] = useState(70);

  useEffect(() => {
    mockService.getProfile().then((p) => {
      setProfile(p);
      setDarkMode(p.darkMode);
      setNotifications(p.notifications);
      setDistanceAlert(p.distanceAlert);
    });
  }, []);

  return (
    <div className="size-full flex flex-col overflow-hidden" style={{ background: "#090B0F" }}>
      <div className="flex-1 overflow-y-auto pb-[100px]">

        {/* Header */}
        <div className="flex items-center justify-between px-[16px] pt-[20px] pb-[8px]">
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: "#F5F6FA" }}>
            Profile
          </span>
          <button
            className="flex items-center justify-center size-[40px] rounded-full"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <Settings size={16} color="#8A8FA8" />
          </button>
        </div>

        {/* Profile hero */}
        <div className="flex flex-col items-center py-[24px]">
          {/* Multi-ring avatar */}
          <div className="relative flex items-center justify-center mb-[16px]" style={{ width: 128, height: 128 }}>
            {/* Rotating outer ring */}
            <motion.div
              className="absolute rounded-full border"
              style={{ width: 128, height: 128, borderColor: "rgba(232,197,71,0.3)", borderWidth: 1 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            {/* Static middle ring */}
            <div
              className="absolute rounded-full border"
              style={{ width: 114, height: 114, borderColor: "rgba(232,197,71,0.5)", borderWidth: 1.5 }}
            />
            {/* Gold border inner */}
            <div
              className="absolute rounded-full"
              style={{ width: 100, height: 100, background: "linear-gradient(135deg, #E8C547, #A88B2A)", padding: 2 }}
            >
              <div className="size-full rounded-full overflow-hidden" style={{ border: "2px solid #090B0F" }}>
                <img src={imgUserAvatar} alt="Avatar" className="size-full object-cover" />
              </div>
            </div>
          </div>

          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: "#F5F6FA", marginBottom: 4 }}>
            {profile?.name ?? "Monish Kumar"}
          </span>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#8A8FA8", marginBottom: 12 }}>
            {profile?.email ?? "monish@eyeease.ai"}
          </span>

          {profile?.isPremium && (
            <div className="relative">
              <PremiumBadge />
            </div>
          )}
        </div>

        {/* Stats row */}
        <div className="flex gap-[8px] px-[16px] mb-[24px]">
          <StatCard value="42" label="Sessions" />
          <StatCard value="81" label="Avg Score" />
          <StatCard value="7d 🔥" label="Streak" />
        </div>

        {/* Preferences */}
        <SectionHeader title="Preferences" />
        <div className="px-[16px]">
          <SettingRow icon={<Moon size={16} color="#93C5FD" />} iconColor="#93C5FD" label="Dark Mode" value={darkMode} onToggle={setDarkMode} />
          <SettingRow icon={<Bell size={16} color="#E8C547" />} iconColor="#E8C547" label="Notifications" value={notifications} onToggle={setNotifications} />
          <SettingRow icon={<Eye size={16} color="#00E676" />} iconColor="#00E676" label="Distance Alert" value={distanceAlert} onToggle={setDistanceAlert} />
        </div>

        {/* Monitoring */}
        <SectionHeader title="Monitoring" />
        <div className="px-[16px] mb-[8px]">
          <div
            className="rounded-[16px] px-[16px] py-[14px] mb-[6px]"
            style={{ background: "#111318", border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="flex items-center justify-between mb-[12px]">
              <div className="flex items-center gap-[12px]">
                <div className="flex items-center justify-center size-[36px] rounded-full" style={{ background: "rgba(232,197,71,0.1)" }}>
                  <Sliders size={16} color="#E8C547" />
                </div>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#F5F6FA" }}>Blink Sensitivity</span>
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, fontSize: 14, color: "#E8C547" }}>{sensitivity}%</span>
            </div>
            <GoldSlider value={sensitivity} onChange={setSensitivity} />
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#8A8FA8", marginTop: 8 }}>
              Detects blinks at {(0.15 + (sensitivity / 100) * 0.2).toFixed(2)} EAR threshold
            </p>
          </div>
        </div>

        {/* Account */}
        <SectionHeader title="Account" />
        <div className="px-[16px]">
          <SettingRow icon={<Shield size={16} color="#93C5FD" />} iconColor="#93C5FD" label="Privacy & Security" onPress={() => {}} />
          <SettingRow icon={<Settings size={16} color="#8A8FA8" />} iconColor="#8A8FA8" label="App Settings" onPress={() => {}} />
        </div>

        {/* Upgrade CTA */}
        {!profile?.isPremium && (
          <div className="px-[16px] mt-[16px]">
            <motion.div
              className="rounded-[20px] px-[20px] py-[18px] flex items-center justify-between"
              style={{ background: "#111318", border: "1px solid rgba(232,197,71,0.25)" }}
              whileTap={{ scale: 0.98 }}
            >
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15, color: "#E8C547" }}>Unlock Pro Analytics</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#8A8FA8" }}>Unlimited scans · AI insights · PDF exports</p>
              </div>
              <motion.span
                style={{ fontSize: 20, color: "#E8C547" }}
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.div>
          </div>
        )}

        {/* Logout */}
        <div className="px-[16px] mt-[20px]">
          <motion.button
            className="w-full flex items-center gap-[12px] px-[16px] py-[14px] rounded-[16px]"
            style={{ background: "rgba(255,75,75,0.08)", border: "1px solid rgba(255,75,75,0.2)" }}
            onClick={onLogout}
            whileTap={{ scale: 0.97 }}
          >
            <LogOut size={16} color="#FF4B4B" />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#FF4B4B" }}>Log Out</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#3D4259", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8, marginTop: 20, paddingLeft: 16 }}>
      {title}
    </p>
  );
}
