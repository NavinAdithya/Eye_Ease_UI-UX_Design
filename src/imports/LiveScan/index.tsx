import svgPaths from "./svg-ev52zhev4d";

function Container() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p300a1100} fill="var(--fill-0, #E5E2E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Button">
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Heading 2">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[48px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[24px]">Live Scan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(19,19,19,0.9)] relative shrink-0 w-full z-[2]" data-name="Top Bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[8px] pt-[16px] px-[16px] relative size-full">
          <Button />
          <Heading />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] whitespace-nowrap">
          <p className="leading-[16px]">LIVE</p>
        </div>
      </div>
    </div>
  );
}

function LiveIndicator() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(19,19,19,0.6)] content-stretch flex gap-[8px] items-center left-[13px] px-[11px] py-[5px] rounded-[9999px] top-[13px]" data-name="LIVE Indicator">
      <div aria-hidden className="absolute border border-[rgba(76,70,56,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#10b981] relative rounded-[9999px] shadow-[0px_0px_8px_0px_rgba(16,185,129,0.8)] shrink-0 size-[8px]" data-name="Background+Shadow" />
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffe08a] text-[12px] tracking-[0.12px] whitespace-nowrap">
          <p className="leading-[16px]">EAR 0.28</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(19,19,19,0.4)] relative rounded-[9999px] self-stretch shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(225,196,113,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[13px] py-[7px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffe08a] text-[12px] tracking-[0.12px] whitespace-nowrap">
          <p className="leading-[16px]">Blinks 14</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(19,19,19,0.4)] relative rounded-[9999px] self-stretch shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(225,196,113,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[13px] py-[7px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffe08a] text-[12px] tracking-[0.12px] whitespace-nowrap">
          <p className="leading-[16px]">Dist 45cm</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(19,19,19,0.4)] relative rounded-[9999px] self-stretch shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(225,196,113,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[13px] py-[7px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function FloatingMetricBadges() {
  return (
    <div className="absolute bottom-[12.99px] content-stretch flex gap-[8px] h-[30px] items-start justify-center left-px px-[8px] right-px" data-name="Floating Metric Badges">
      <OverlayBorderOverlayBlur />
      <OverlayBorderOverlayBlur1 />
      <OverlayBorderOverlayBlur2 />
    </div>
  );
}

function CameraViewport() {
  return (
    <div className="aspect-video bg-black relative rounded-[48px] shrink-0 w-full" data-name="Camera Viewport">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[1px_1px_0.99px_1px] opacity-50" style={{ backgroundImage: "linear-gradient(150.749deg, rgb(14, 14, 14) 0%, rgb(42, 42, 42) 100%)" }} data-name="Simulated Camera Feed Background" />
        <LiveIndicator />
        <div className="absolute border-[#4285f4] border-l-2 border-solid border-t-2 inset-[25.25%_65.92%_58.86%_25.14%] opacity-80 rounded-tl-[2px]" data-name="Face Guides (Blue Brackets)" />
        <div className="absolute border-[#4285f4] border-r-2 border-solid border-t-2 inset-[25.25%_25.14%_58.86%_65.92%] opacity-80 rounded-tr-[2px]" data-name="Border" />
        <div className="absolute border-[#4285f4] border-b-2 border-l-2 border-solid inset-[58.86%_65.92%_25.25%_25.14%] opacity-80 rounded-bl-[2px]" data-name="Border" />
        <div className="absolute border-[#4285f4] border-b-2 border-r-2 border-solid inset-[58.86%_25.14%_25.25%_65.92%] opacity-80 rounded-br-[2px]" data-name="Border" />
        <FloatingMetricBadges />
      </div>
      <div aria-hidden className="absolute border border-[#4c4638] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function CameraViewportMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[8px] px-[16px] right-0 top-0" data-name="Camera Viewport:margin">
      <CameraViewport />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[14px] w-full">
          <p className="leading-[20px]">Session Score</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Liberation_Sans:Regular',sans-serif] gap-[8px] items-baseline leading-[0] not-italic relative size-full text-[16px] whitespace-nowrap">
        <div className="flex flex-col justify-center relative shrink-0 text-[#ffe08a] tracking-[-0.4px]">
          <p className="leading-[24px]">78</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#cfc6b3]">
          <p className="leading-[24px]">/ 100</p>
        </div>
      </div>
    </div>
  );
}

function ScoreBanner() {
  return (
    <div className="bg-[#201f1f] relative rounded-[48px] shrink-0 w-full" data-name="Score Banner">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start p-[25px] relative size-full">
          <Container5 />
          <Paragraph />
          <div className="absolute bg-gradient-to-r from-[rgba(255,224,138,0.05)] inset-px to-[rgba(255,224,138,0)]" data-name="Gradient" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(76,70,56,0.5)] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function ScoreBannerMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[24px] px-[16px] right-0 top-[209.38px]" data-name="Score Banner:margin">
      <ScoreBanner />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.pfca86e0} fill="var(--fill-0, #FFDAD6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StopActionButton() {
  return (
    <div className="bg-[#93000a] content-stretch flex gap-[11.99px] items-center justify-center px-px py-[17px] relative rounded-[48px] shrink-0 w-full" data-name="Stop Action → Button">
      <div aria-hidden className="absolute border border-[rgba(255,180,171,0.2)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[48px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container6 />
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffdad6] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Stop Scan</p>
      </div>
    </div>
  );
}

function StopActionMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[24px] pt-[32px] px-[16px] right-0 top-[602px]" data-name="Stop Action:margin">
      <StopActionButton />
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="h-[812px] relative shrink-0 w-full z-[1]" data-name="Main Content Area">
      <CameraViewportMargin />
      <ScoreBannerMargin />
      <StopActionMargin />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#131313] content-stretch flex flex-col isolate items-start max-w-[448px] min-h-[884px] overflow-x-clip overflow-y-auto relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Background+Shadow">
      <TopBar />
      <MainContentArea />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p12a32500} fill="var(--fill-0, #CFC6B3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Home</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Margin />
        <Container8 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
        <g id="Container">
          <path d={svgPaths.p6da5600} fill="var(--fill-0, #FFE08A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffe08a] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Scan</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Margin1 />
        <Container10 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #CFC6B3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Alerts</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Margin2 />
        <Container12 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p30837e80} fill="var(--fill-0, #CFC6B3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Analytics</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Margin3 />
        <Container14 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #CFC6B3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Profile</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Margin4 />
        <Container16 />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute bg-[#201f1f] bottom-0 content-stretch flex gap-[10.8px] h-[80px] items-center left-0 pl-[13.39px] pr-[13.41px] pt-px w-[390px]" data-name="Nav">
      <div aria-hidden className="absolute border-[#4c4638] border-solid border-t inset-0 pointer-events-none" />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

export default function LiveScan() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(19, 19, 19) 0%, rgb(19, 19, 19) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Live Scan">
      <BackgroundShadow />
      <Nav />
    </div>
  );
}