import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { AlertTriangle, CheckCircle, Info, Bell } from "lucide-react";
import { mockService, type Alert } from "../services/mockService";

interface AlertsScreenProps {
  onNavigate: (tab: string) => void;
}

const severityConfig = {
  error: { bg: "rgba(147,0,10,0.3)", border: "#FFB4AB", icon: AlertTriangle, iconColor: "#FFB4AB", accent: "#FFB4AB" },
  warning: { bg: "rgba(225,196,113,0.2)", border: "#E1C471", icon: AlertTriangle, iconColor: "#E1C471", accent: "#E1C471" },
  success: { bg: "rgba(238,226,191,0.2)", border: "#EEE2BF", icon: CheckCircle, iconColor: "#EEE2BF", accent: "#EEE2BF" },
  info: { bg: "rgba(150,144,127,0.2)", border: "#98907F", icon: Info, iconColor: "#CFC6B3", accent: "#98907F" },
};

function AlertCard({ alert, index }: { alert: Alert; index: number }) {
  const cfg = severityConfig[alert.type];
  const Icon = cfg.icon;
  return (
    <motion.div
      className="relative rounded-[24px] overflow-hidden"
      style={{ background: "#201f1f", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)" }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ background: cfg.accent }} />
      <div className="flex items-center p-[16px] pl-[20px]">
        <div
          className="flex items-center justify-center rounded-full size-[40px] mr-[16px] shrink-0"
          style={{ background: cfg.bg }}
        >
          <Icon size={20} color={cfg.iconColor} />
        </div>
        <div className="flex-1 min-w-0">
          <p style={{ fontSize: 16, fontFamily: "Inter, sans-serif", color: "#E5E2E1", marginBottom: 2 }}>{alert.title}</p>
          <p style={{ fontSize: 14, fontFamily: "Inter, sans-serif", color: "#CFC6B3", lineHeight: "20px" }}
            className="truncate">{alert.message}</p>
        </div>
        <span style={{ fontSize: 12, fontFamily: "Inter, sans-serif", color: "#CFC6B3", letterSpacing: "0.12px", marginLeft: 12, flexShrink: 0, whiteSpace: "nowrap" }}>
          {alert.time}
        </span>
      </div>
    </motion.div>
  );
}

export function AlertsScreen({ onNavigate }: AlertsScreenProps) {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    mockService.getAlerts().then(setAlerts);
  }, []);

  const today = alerts.filter((a) => a.group === "today");
  const yesterday = alerts.filter((a) => a.group === "yesterday");

  return (
    <div className="size-full flex flex-col overflow-hidden" style={{ background: "#131313" }}>
      {/* Header */}
      <div className="flex items-center justify-between pl-[64px] pr-[16px] pt-[16px] pb-[8px]" style={{ background: "#131313" }}>
        <div className="flex-1 flex justify-center">
          <span style={{ fontSize: 24, fontWeight: 700, fontFamily: "Inter, sans-serif", color: "#E5E2E1" }}>Alerts</span>
        </div>
        <button className="flex items-center justify-center size-[48px] rounded-full">
          <Bell size={20} color="#E5E2E1" />
        </button>
      </div>

      {/* Scrollable alerts */}
      <div className="flex-1 overflow-y-auto pb-[96px]">
        <div className="px-[16px] pt-[16px] flex flex-col gap-[32px]">
          {/* Today */}
          {today.length > 0 && (
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-center gap-[16px]">
                <span style={{ fontSize: 22, fontWeight: 600, fontFamily: "Inter, sans-serif", color: "#E5E2E1" }}>Today</span>
                <div className="flex-1 h-px" style={{ background: "#4c4638" }} />
              </div>
              <div className="flex flex-col gap-[12px]">
                {today.map((a, i) => <AlertCard key={a.id} alert={a} index={i} />)}
              </div>
            </div>
          )}

          {/* Yesterday */}
          {yesterday.length > 0 && (
            <div className="flex flex-col gap-[16px] opacity-75">
              <div className="flex items-center gap-[16px]">
                <span style={{ fontSize: 22, fontWeight: 600, fontFamily: "Inter, sans-serif", color: "#CFC6B3" }}>Yesterday</span>
                <div className="flex-1 h-px" style={{ background: "#4c4638", opacity: 0.5 }} />
              </div>
              <div className="flex flex-col gap-[12px]">
                {yesterday.map((a, i) => <AlertCard key={a.id} alert={a} index={i} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
