import svgPaths from "./svg-p3n2097t1";

function ProgressBar() {
  return (
    <div className="bg-[#353534] h-[3px] overflow-clip relative rounded-[9999px] shrink-0 w-[120px]" data-name="Progress Bar">
      <div className="absolute bg-[#ffe08a] inset-[0_40%_0_0] rounded-[9999px] shadow-[0px_0px_8px_0px_rgba(255,224,138,0.4)]" data-name="Progress Fill (60%)" />
    </div>
  );
}

function LoadingCaption() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Loading Caption">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#98907f] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">LOADING...</p>
      </div>
    </div>
  );
}

function BottomLoadingSection() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex flex-col gap-[8px] items-center left-0 px-[16px] right-0" data-name="Bottom Loading Section">
      <ProgressBar />
      <LoadingCaption />
    </div>
  );
}

function CenterIcon() {
  return (
    <div className="h-[50px] relative shrink-0 w-[73.333px]" data-name="Center Icon">
      <div className="absolute inset-[0_-10.91%_-36%_-10.91%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89.3333 68">
          <g filter="url(#filter0_dd_1_513)" id="Center Icon">
            <path d={svgPaths.p3612fd80} fill="var(--fill-0, #FFE08A)" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="68" id="filter0_dd_1_513" width="89.3333" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_513" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_1_513" mode="normal" result="effect2_dropShadow_1_513" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_513" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IconWithRadialGlow() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[100px]" data-name="Icon with Radial Glow">
      <div className="absolute bg-[rgba(255,224,138,0.2)] blur-[12px] inset-0 rounded-[9999px]" data-name="20% Opacity Glow" />
      <CenterIcon />
    </div>
  );
}

function BrandingText() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.75px] items-center leading-[0] not-italic relative shrink-0 text-center whitespace-nowrap" data-name="Branding Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[32px] text-white tracking-[-0.8px]">
        <p className="leading-[40px]">EyeEase</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cfc6b3] text-[15px]">
        <p className="leading-[22.5px]">Protecting Your Eyes</p>
      </div>
    </div>
  );
}

function BrandingTextMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Branding Text:margin">
      <BrandingText />
    </div>
  );
}

function CenteredMainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0" data-name="Centered Main Content">
      <IconWithRadialGlow />
      <BrandingTextMargin />
    </div>
  );
}

function MainSplashScreenContainer() {
  return (
    <div className="content-stretch flex flex-col h-[884px] items-center justify-center relative shrink-0 w-full" data-name="Main - Splash Screen Container">
      <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 884' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(48.31 0 0 48.31 195 442)'><stop stop-color='rgba(255,224,138,0.12)' offset='0'/><stop stop-color='rgba(255,224,138,0)' offset='0.6'/></radialGradient></defs></svg>\")" }} data-name="Radial Gradient Background Layer" />
      <BottomLoadingSection />
      <CenteredMainContent />
    </div>
  );
}

export default function SplashScreen() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(14, 14, 14) 0%, rgb(14, 14, 14) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Splash Screen">
      <MainSplashScreenContainer />
    </div>
  );
}