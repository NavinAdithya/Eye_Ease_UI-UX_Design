# Android patches to apply after `cap add android`

## 1. Camera permission — android/app/src/main/AndroidManifest.xml
Add inside <manifest> before <application>:
```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-feature android:name="android.hardware.camera" android:required="true" />
<uses-permission android:name="android.permission.INTERNET" />
```

## 2. Allow cleartext (for face-api CDN weights) — android/app/src/main/res/xml/network_security_config.xml
Create the file:
```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
  <base-config cleartextTrafficPermitted="true" />
</network-security-config>
```
Then in AndroidManifest.xml <application> tag add:
```
android:networkSecurityConfig="@xml/network_security_config"
```

## 3. Min SDK — android/variables.gradle
Set minSdkVersion to 24 (required for face-api WebGL):
```
minSdkVersion = 24
```
