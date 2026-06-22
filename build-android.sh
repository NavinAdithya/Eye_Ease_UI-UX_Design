#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# EyeEase — Android APK build script
# Run this ONCE on your local machine after downloading the project.
# Requirements: Node 18+, pnpm, Android Studio, JDK 17
# ─────────────────────────────────────────────────────────────────────────────
set -e

echo "📦 Installing dependencies..."
pnpm install

echo "🔨 Creating index.html for Vite build..."
cat > index.html << 'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="theme-color" content="#090B0F" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <link rel="manifest" href="./manifest.json" />
    <title>EyeEase</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
      import './src/styles/index.css'
      import { StrictMode } from 'react'
      import { createRoot } from 'react-dom/client'
      import App from './src/app/App.tsx'
      createRoot(document.getElementById('root')).render(
        StrictMode ? App() : App()
      )
    </script>
  </body>
</html>
EOF

echo "🏗️  Building web assets..."
pnpm build

echo "📱 Adding Android platform (skip if already added)..."
if [ ! -d "android" ]; then
  npx cap add android
else
  echo "   Android platform already exists, syncing..."
fi

echo "🔄 Syncing web assets to Android..."
npx cap sync android

echo "✅ Done! Next step: open Android Studio"
echo "   Run: pnpm cap:open"
echo "   Then: Build → Generate Signed APK"
