// Mock service layer — replace BASE_URL and set USE_MOCK=false to connect real backend
export const BASE_URL = "";
export const USE_MOCK = true;

export interface DashboardData {
  score: number;
  blinkRate: number;
  distance: number;
  screenTime: string;
  userName: string;
}

export interface Alert {
  id: string;
  type: "error" | "warning" | "success" | "info";
  title: string;
  message: string;
  time: string;
  group: "today" | "yesterday";
}

export interface AnalyticsDay {
  day: string;
  score: number;
  blinks: number;
  screenTime: number;
}

export interface ScanMetrics {
  ear: number;
  blinkCount: number;
  distance: number;
  sessionScore: number;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  isPremium: boolean;
  darkMode: boolean;
  notifications: boolean;
  blinkSensitivity: number;
  distanceAlert: boolean;
}

const mockDashboard: DashboardData = {
  score: 78,
  blinkRate: 14,
  distance: 45,
  screenTime: "8.2h",
  userName: "Navin",
};

const mockAlerts: Alert[] = [
  { id: "1", type: "error", title: "Eye Strain Detected", message: "Take a 20-second break to rest your eyes.", time: "2 mins ago", group: "today" },
  { id: "2", type: "warning", title: "Screen Too Close", message: "Move your device further away from your face.", time: "15 mins ago", group: "today" },
  { id: "3", type: "success", title: "Great Blink Rate!", message: "Your eye health is optimal right now.", time: "1 hr ago", group: "today" },
  { id: "4", type: "info", title: "Late Night Session", message: "Blue light filter was activated automatically.", time: "11:30 PM", group: "yesterday" },
  { id: "5", type: "info", title: "Weekly Goal Reached", message: "You maintained safe screen distance for 5 days.", time: "9:00 AM", group: "yesterday" },
];

const mockAnalytics: AnalyticsDay[] = [
  { day: "Mon", score: 72, blinks: 12, screenTime: 6.5 },
  { day: "Tue", score: 65, blinks: 10, screenTime: 9.2 },
  { day: "Wed", score: 80, blinks: 16, screenTime: 7.1 },
  { day: "Thu", score: 75, blinks: 14, screenTime: 8.0 },
  { day: "Fri", score: 78, blinks: 14, screenTime: 8.2 },
  { day: "Sat", score: 85, blinks: 18, screenTime: 5.5 },
  { day: "Sun", score: 90, blinks: 20, screenTime: 4.0 },
];

const mockScanMetrics: ScanMetrics = {
  ear: 0.28,
  blinkCount: 14,
  distance: 45,
  sessionScore: 78,
};

const mockProfile: UserProfile = {
  name: "Navin Adithya",
  email: "navinadithya394@gmail.com",
  avatar: "",
  isPremium: true,
  darkMode: true,
  notifications: true,
  blinkSensitivity: 70,
  distanceAlert: true,
};

function delay(ms = 300): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

export const mockService = {
  async getDashboard(): Promise<DashboardData> {
    await delay();
    return mockDashboard;
  },

  async getAlerts(): Promise<Alert[]> {
    await delay();
    return mockAlerts;
  },

  async getAnalytics(): Promise<AnalyticsDay[]> {
    await delay();
    return mockAnalytics;
  },

  async getScanMetrics(): Promise<ScanMetrics> {
    await delay(100);
    return {
      ...mockScanMetrics,
      blinkCount: mockScanMetrics.blinkCount + Math.floor(Math.random() * 2),
      ear: parseFloat((0.25 + Math.random() * 0.1).toFixed(2)),
      distance: 40 + Math.floor(Math.random() * 15),
    };
  },

  async getProfile(): Promise<UserProfile> {
    await delay();
    return mockProfile;
  },

  async login(_email: string, _password: string): Promise<{ token: string }> {
    await delay(600);
    return { token: "mock-token-xyz" };
  },

  async register(_name: string, _email: string, _password: string): Promise<{ token: string }> {
    await delay(800);
    return { token: "mock-token-xyz" };
  },
};
