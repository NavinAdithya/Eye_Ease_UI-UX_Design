import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, EyeOff } from "lucide-react";
import { mockService } from "../services/mockService";

interface AuthScreenProps {
  onAuthenticated: () => void;
}

export function AuthScreen({ onAuthenticated }: AuthScreenProps) {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (tab === "login") {
        await mockService.login(email, password);
      } else {
        await mockService.register(name, email, password);
      }
      onAuthenticated();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative size-full flex flex-col items-center justify-center px-[16px] overflow-y-auto"
      style={{ background: "#090B0F" }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(232,197,71,0.06) 0%, transparent 70%)" }} />

      {/* Header */}
      <div className="flex flex-col items-center mb-[36px]">
        <div
          className="relative flex items-center justify-center size-[72px] mb-[14px] rounded-2xl"
          style={{ background: "#131620", border: "1px solid rgba(255,255,255,0.08)" }}
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
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 22, color: "#F5F6FA", letterSpacing: "-0.03em" }}>
          EyeEase
        </span>
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#8A8FA8", marginTop: 4 }}>
          Protecting Your Eyes
        </span>
      </div>

      {/* Tab switcher */}
      <div className="flex w-full max-w-[360px] mb-[28px] rounded-full p-[3px]"
        style={{ background: "#111318", border: "1px solid rgba(255,255,255,0.06)" }}>
        {(["login", "register"] as const).map((t) => (
          <button key={t} onClick={() => { setTab(t); setError(""); }}
            className="flex-1 py-[10px] rounded-full transition-all duration-200"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, background: tab === t ? "#E8C547" : "transparent", color: tab === t ? "#090B0F" : "#8A8FA8" }}>
            {t === "login" ? "Log In" : "Register"}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.form key={tab} onSubmit={handleSubmit}
          className="w-full max-w-[360px] flex flex-col gap-[14px]"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.25 }}>

          {tab === "register" && (
            <InputField icon="👤" placeholder="Full name" value={name} onChange={setName} type="text" />
          )}
          <InputField icon="✉️" placeholder="Email address" value={email} onChange={setEmail} type="email" />
          <div className="flex items-center h-[54px] rounded-[16px] px-[16px] gap-[12px]"
            style={{ background: "#111318", border: "1px solid rgba(255,255,255,0.08)" }}>
            <span style={{ color: "#8A8FA8", fontSize: 14 }}>🔒</span>
            <input type={showPass ? "text" : "password"} value={password}
              onChange={(e) => setPassword(e.target.value)} placeholder="Password"
              className="flex-1 bg-transparent outline-none"
              style={{ color: "#F5F6FA", fontSize: 15, fontFamily: "Inter, sans-serif" }} />
            <button type="button" onClick={() => setShowPass(!showPass)}>
              {showPass ? <EyeOff size={16} color="#8A8FA8" /> : <Eye size={16} color="#8A8FA8" />}
            </button>
          </div>

          {error && (
            <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
              className="rounded-[12px] px-[14px] py-[10px]"
              style={{ background: "rgba(255,75,75,0.1)", border: "1px solid rgba(255,75,75,0.3)" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#FF4B4B" }}>{error}</p>
            </motion.div>
          )}

          <motion.button type="submit" disabled={loading}
            className="w-full h-[54px] rounded-[16px] flex items-center justify-center mt-[4px]"
            style={{ background: "#E8C547", opacity: loading ? 0.75 : 1 }}
            whileTap={{ scale: 0.97 }}>
            {loading
              ? <motion.div className="w-[20px] h-[20px] rounded-full border-2 border-white border-t-transparent"
                  animate={{ rotate: 360 }} transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }} />
              : <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15, color: "#090B0F" }}>
                  {tab === "login" ? "Log In" : "Create Account"}
                </span>
            }
          </motion.button>

          <div className="flex items-center gap-[12px] my-[4px]">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            <span style={{ color: "#3D4259", fontSize: 12, fontFamily: "Inter, sans-serif" }}>or</span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
          </div>

          {/* Google (mock) */}
          <motion.button type="button" onClick={onAuthenticated}
            className="w-full h-[54px] rounded-[16px] flex items-center justify-center gap-[10px]"
            style={{ background: "#111318", border: "1px solid rgba(255,255,255,0.08)" }}
            whileTap={{ scale: 0.97 }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M18.1711 8.36773H17.5V8.33341H10V11.6667H14.7096C14.0225 13.607 12.1762 15.0001 10 15.0001C7.23859 15.0001 5.00001 12.7615 5.00001 10.0001C5.00001 7.23868 7.23859 5.0001 10 5.0001C11.2746 5.0001 12.4342 5.48093 13.3171 6.26718L15.6742 3.91009C14.1858 2.52176 12.1954 1.66676 10 1.66676C5.39751 1.66676 1.66667 5.39759 1.66667 10.0001C1.66667 14.6026 5.39751 18.3334 10 18.3334C14.6025 18.3334 18.3333 14.6026 18.3333 10.0001C18.3333 9.44176 18.2758 8.89593 18.1711 8.36773Z" fill="#FBC02D"/>
              <path d="M2.62744 6.12139L5.36536 8.12972C6.10619 6.29472 7.90036 5.0001 10 5.0001C11.2746 5.0001 12.4342 5.48093 13.3171 6.26718L15.6742 3.91009C14.1858 2.52176 12.1954 1.66676 10 1.66676C6.79911 1.66676 4.02327 3.47389 2.62744 6.12139Z" fill="#E53935"/>
              <path d="M10 18.3334C12.1525 18.3334 14.1083 17.5096 15.5871 16.1704L13.0079 13.9871C12.1431 14.6452 11.0864 15.0009 10 15.0001C7.83255 15.0001 5.99213 13.6179 5.29796 11.6888L2.58046 13.7829C3.96046 16.4817 6.76213 18.3334 10 18.3334Z" fill="#4CAF50"/>
              <path d="M18.1712 8.36765H17.5V8.33332H10V11.6666H14.7096C14.3809 12.5901 13.7889 13.3917 13.0067 13.9875L13.0079 13.9866L15.5871 16.1699C15.4046 16.3358 18.3333 14.1666 18.3333 9.99998C18.3333 9.44165 18.2758 8.89582 18.1712 8.36765Z" fill="#1565C0"/>
            </svg>
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 15, color: "#F5F6FA" }}>
              Continue with Google
            </span>
          </motion.button>

          <div className="flex justify-center gap-[4px] pt-[8px]">
            <span style={{ color: "#8A8FA8", fontSize: 13, fontFamily: "Inter, sans-serif" }}>
              {tab === "login" ? "Don't have an account? " : "Already have an account? "}
            </span>
            <button type="button" onClick={() => { setTab(tab === "login" ? "register" : "login"); setError(""); }}
              style={{ color: "#E8C547", fontSize: 13, fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
              {tab === "login" ? "Register" : "Log In"}
            </button>
          </div>
        </motion.form>
      </AnimatePresence>
    </div>
  );
}

function InputField({ icon, placeholder, value, onChange, type }: {
  icon: string; placeholder: string; value: string; onChange: (v: string) => void; type: string;
}) {
  return (
    <div className="flex items-center h-[54px] rounded-[16px] px-[16px] gap-[12px]"
      style={{ background: "#111318", border: "1px solid rgba(255,255,255,0.08)" }}>
      <span style={{ color: "#8A8FA8", fontSize: 14 }}>{icon}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder} className="flex-1 bg-transparent outline-none"
        style={{ color: "#F5F6FA", fontSize: 15, fontFamily: "Inter, sans-serif" }} />
    </div>
  );
}
