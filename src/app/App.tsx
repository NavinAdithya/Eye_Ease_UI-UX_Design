import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SplashScreen } from "./components/SplashScreen";
import { OnboardingScreen } from "./components/OnboardingScreen";
import { AuthScreen } from "./components/AuthScreen";
import { DashboardScreen } from "./components/DashboardScreen";
import { LiveScanScreen } from "./components/LiveScanScreen";
import { AlertsScreen } from "./components/AlertsScreen";
import { AnalyticsScreen } from "./components/AnalyticsScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { BottomNav, type NavTab } from "./components/BottomNav";

type AppScreen = "splash" | "onboarding" | "auth" | "main";

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "30%" : "-30%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-30%" : "30%", opacity: 0 }),
};

const tabOrder: NavTab[] = ["dashboard", "livescan", "alerts", "analytics", "profile"];

export default function App() {
  const [appScreen, setAppScreen] = useState<AppScreen>("splash");
  const [activeTab, setActiveTab] = useState<NavTab>("dashboard");
  const [prevTab, setPrevTab] = useState<NavTab>("dashboard");
  const [alertCount] = useState(3);

  const handleNavigate = (tab: NavTab | string) => {
    setPrevTab(activeTab);
    setActiveTab(tab as NavTab);
  };

  const direction = tabOrder.indexOf(activeTab) - tabOrder.indexOf(prevTab);

  const mainScreens: Record<NavTab, React.ReactNode> = {
    dashboard: <DashboardScreen onNavigate={handleNavigate} />,
    livescan: <LiveScanScreen onBack={() => handleNavigate("dashboard")} />,
    alerts: <AlertsScreen onNavigate={handleNavigate} />,
    analytics: <AnalyticsScreen />,
    profile: <ProfileScreen onLogout={() => setAppScreen("auth")} />,
  };

  return (
    <div
      className="size-full flex items-center justify-center overflow-hidden"
      style={{ background: "#05070A", minHeight: "100dvh" }}
    >
      <div
        className="relative overflow-hidden flex flex-col"
        style={{
          width: "min(390px, 100vw)",
          height: "min(844px, 100dvh)",
          background: "#090B0F",
          boxShadow: "0 0 80px rgba(0,0,0,0.8)",
        }}
      >
        <AnimatePresence mode="wait">
          {appScreen === "splash" && (
            <motion.div key="splash" className="absolute inset-0"
              initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <SplashScreen onComplete={() => setAppScreen("onboarding")} />
            </motion.div>
          )}

          {appScreen === "onboarding" && (
            <motion.div key="onboarding" className="absolute inset-0"
              initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }} transition={{ duration: 0.4, ease: "easeInOut" }}>
              <OnboardingScreen onComplete={() => setAppScreen("auth")} />
            </motion.div>
          )}

          {appScreen === "auth" && (
            <motion.div key="auth" className="absolute inset-0"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.35, ease: "easeOut" }}>
              <AuthScreen onAuthenticated={() => setAppScreen("main")} />
            </motion.div>
          )}

          {appScreen === "main" && (
            <motion.div key="main" className="absolute inset-0 flex flex-col"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
              <div className="relative flex-1 overflow-hidden">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={activeTab}
                    className="absolute inset-0"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {mainScreens[activeTab]}
                  </motion.div>
                </AnimatePresence>
              </div>
              {activeTab !== "livescan" && (
                <BottomNav active={activeTab} onNavigate={handleNavigate} alertCount={alertCount} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
