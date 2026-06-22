import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.eyeease.app",
  appName: "EyeEase",
  webDir: "dist",
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystorePassword: undefined,
      keystoreAlias: undefined,
      keystoreAliasPassword: undefined,
    },
  },
  plugins: {
    Camera: {
      // Prompt user for camera permission on first scan
    },
  },
};

export default config;
