import type { FC } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Home, ScanEye, Bell, BarChart2, User } from "lucide-react";

export type NavTab = "dashboard" | "livescan" | "alerts" | "analytics" | "profile";

interface BottomNavProps {
  active: NavTab;
  onNavigate: (tab: NavTab) => void;
  alertCount?: number;
}

const leftTabs: { id: NavTab; label: string; Icon: FC<{ size?: number }> }[] = [
  { id: "dashboard", label: "Home", Icon: Home },
  { id: "alerts", label: "Alerts", Icon: Bell },
];
const rightTabs: { id: NavTab; label: string; Icon: FC<{ size?: number }> }[] = [
  { id: "analytics", label: "Stats", Icon: BarChart2 },
  { id: "profile", label: "Profile", Icon: User },
];

function NavItem({
  id, label, Icon, isActive, onClick, badge,
}: {
  id: NavTab; label: string; Icon: FC<{ size?: number }>; isActive: boolean; onClick: () => void; badge?: number;
}) {
  return (
    <button
      onClick={onClick}
      className="relative flex flex-col items-center gap-[3px] flex-1 py-[2px]"
    >
      <div className="relative">
        <motion.div
          animate={{ color: isActive ? "#E8C547" : "#3D4259" }}
          transition={{ duration: 0.2 }}
          style={{ color: isActive ? "#E8C547" : "#3D4259" }}
        >
          <Icon size={20} />
        </motion.div>
        {badge !== undefined && badge > 0 && (
          <div
            className="absolute -top-[3px] -right-[4px] w-[7px] h-[7px] rounded-full"
            style={{ background: "#EF4444" }}
          />
        )}
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2 }}
            style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 500, color: "#E8C547", letterSpacing: "0.04em" }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Active underline dot */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="rounded-full"
            style={{ width: 4, height: 4, background: "#E8C547" }}
          />
        )}
      </AnimatePresence>
    </button>
  );
}

export function BottomNav({ active, onNavigate, alertCount = 0 }: BottomNavProps) {
  return (
    <div className="absolute bottom-[12px] left-[12px] right-[12px] flex items-center z-20">
      {/* Pill nav */}
      <div
        className="flex-1 flex items-center rounded-[100px] px-[8px] py-[10px]"
        style={{
          background: "rgba(17,19,24,0.92)",
          border: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 -1px 0 rgba(255,255,255,0.04) inset, 0 8px 24px rgba(0,0,0,0.6)",
        }}
      >
        {/* Left tabs */}
        {leftTabs.map(({ id, label, Icon }) => (
          <NavItem
            key={id}
            id={id}
            label={label}
            Icon={Icon}
            isActive={active === id}
            onClick={() => onNavigate(id)}
            badge={id === "alerts" ? alertCount : undefined}
          />
        ))}

        {/* Center FAB */}
        <div className="flex items-center justify-center mx-[4px]">
          <motion.button
            onClick={() => onNavigate("livescan")}
            className="relative flex items-center justify-center rounded-full"
            style={{
              width: 52,
              height: 52,
              background: "#E8C547",
              boxShadow: `0 4px 12px rgba(59,130,246,0.25)`,
            }}
            whileTap={{ scale: 0.93 }}
          >
            {/* Pulse ring when active */}
            {null}
            <ScanEye size={22} color="#090B0F" />
          </motion.button>
        </div>

        {/* Right tabs */}
        {rightTabs.map(({ id, label, Icon }) => (
          <NavItem
            key={id}
            id={id}
            label={label}
            Icon={Icon}
            isActive={active === id}
            onClick={() => onNavigate(id)}
          />
        ))}
      </div>
    </div>
  );
}
