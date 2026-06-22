import svgPaths from "./svg-fr82yaixpg";

function Heading1SpacerForCentering() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative" data-name="Heading 1 - Spacer for centering">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[32px]">Alerts</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p210fe134} fill="var(--fill-0, #E5E2E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Button">
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[48px]" data-name="Container">
      <Button />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="bg-[#131313] relative shrink-0 w-full" data-name="Header - Top App Bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[8px] pl-[64px] pr-[16px] pt-[16px] relative size-full">
          <Heading1SpacerForCentering />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[22px] whitespace-nowrap">
        <p className="leading-[28px]">Today</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] h-px min-w-px relative" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative size-full">
        <div className="bg-[#4c4638] h-px relative shrink-0 w-full" data-name="Horizontal Divider" />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Margin />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[19.8px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19.8">
        <g id="Container">
          <path d={svgPaths.p20809060} fill="var(--fill-0, #FFB4AB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(147,0,10,0.3)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container4 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start pr-[16px] relative shrink-0 w-[56px]" data-name="Margin">
      <Overlay />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] w-full">
        <p className="leading-[24px]">Eye Strain Detected</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#cfc6b3] text-[14px] text-ellipsis w-full">
        <p className="leading-[20px]">Take a 20-second break to rest your eyes.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Heading1 />
      <Container6 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">2 mins ago</p>
      </div>
    </div>
  );
}

function Alert1RedError() {
  return (
    <div className="bg-[#201f1f] relative rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Alert 1 (Red/Error)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Margin1 />
          <Container5 />
          <Margin2 />
          <div className="absolute bg-[#ffb4ab] bottom-0 left-0 top-0 w-[4px]" data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[19px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
        <g id="Container">
          <path d={svgPaths.p7555480} fill="var(--fill-0, #E1C471)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(225,196,113,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container7 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start pr-[16px] relative shrink-0 w-[56px]" data-name="Margin">
      <Overlay1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] w-full">
        <p className="leading-[24px]">Screen Too Close</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#cfc6b3] text-[14px] text-ellipsis w-full">
        <p className="leading-[20px]">Move your device further away from your face.</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Heading2 />
      <Container9 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">15 mins ago</p>
      </div>
    </div>
  );
}

function Alert2AmberSurfaceTint() {
  return (
    <div className="bg-[#201f1f] relative rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Alert 2 (Amber/Surface Tint)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Margin3 />
          <Container8 />
          <Margin4 />
          <div className="absolute bg-[#e1c471] bottom-0 left-0 top-0 w-[4px]" data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p3b22eb80} fill="var(--fill-0, #EEE2BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(238,226,191,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container10 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start pr-[16px] relative shrink-0 w-[56px]" data-name="Margin">
      <Overlay2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] w-full">
        <p className="leading-[24px]">Great Blink Rate!</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#cfc6b3] text-[14px] text-ellipsis w-full">
        <p className="leading-[20px]">Your eye health is optimal right now.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Heading3 />
      <Container12 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">1 hr ago</p>
      </div>
    </div>
  );
}

function Alert3GreenTertiaryFixed() {
  return (
    <div className="bg-[#201f1f] relative rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Alert 3 (Green/Tertiary Fixed)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Margin5 />
          <Container11 />
          <Margin6 />
          <div className="absolute bg-[#eee2bf] bottom-0 left-0 top-0 w-[4px]" data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Alert1RedError />
      <Alert2AmberSurfaceTint />
      <Alert3GreenTertiaryFixed />
    </div>
  );
}

function TodaySection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Today Section">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[22px] whitespace-nowrap">
        <p className="leading-[28px]">Yesterday</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="flex-[1_0_0] h-px min-w-px relative" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative size-full">
        <div className="bg-[#4c4638] h-px opacity-50 relative shrink-0 w-full" data-name="Horizontal Divider" />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Margin7 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
        <g id="Container">
          <path d={svgPaths.p2f8c8280} fill="var(--fill-0, #CFC6B3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#353534] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container15 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start pr-[16px] relative shrink-0 w-[56px]" data-name="Margin">
      <Background />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] w-full">
        <p className="leading-[24px]">Late Night Session</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#cfc6b3] text-[14px] text-ellipsis w-full">
        <p className="leading-[20px]">Blue light filter was activated automatically.</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Heading5 />
      <Container17 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">11:30 PM</p>
      </div>
    </div>
  );
}

function YesterdayAlert() {
  return (
    <div className="bg-[#1c1b1b] relative rounded-[32px] shrink-0 w-full" data-name="Yesterday Alert 1">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Margin8 />
          <Container16 />
          <Margin9 />
          <div className="absolute bg-[#98907f] bottom-0 left-0 top-0 w-[4px]" data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
        <g id="Container">
          <path d={svgPaths.p33125000} fill="var(--fill-0, #CFC6B3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#353534] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container18 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start pr-[16px] relative shrink-0 w-[56px]" data-name="Margin">
      <Background1 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] w-full">
        <p className="leading-[24px]">Weekly Goal Reached</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#cfc6b3] text-[14px] text-ellipsis w-full">
        <p className="leading-[20px]">You maintained safe screen distance for 5 days.</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Heading6 />
      <Container20 />
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">9:00 AM</p>
      </div>
    </div>
  );
}

function YesterdayAlert1() {
  return (
    <div className="bg-[#1c1b1b] relative rounded-[32px] shrink-0 w-full" data-name="Yesterday Alert 2">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Margin10 />
          <Container19 />
          <Margin11 />
          <div className="absolute bg-[#98907f] bottom-0 left-0 top-0 w-[4px]" data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start opacity-75 relative shrink-0 w-full" data-name="Container">
      <YesterdayAlert />
      <YesterdayAlert1 />
    </div>
  );
}

function YesterdaySection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Yesterday Section">
      <Container13 />
      <Container14 />
    </div>
  );
}

function MainScrollableContent() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Main Scrollable Content">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start pb-[96px] pt-[16px] px-[16px] relative size-full">
          <TodaySection />
          <YesterdaySection />
        </div>
      </div>
    </div>
  );
}

function Margin12() {
  return (
    <div className="h-[22px] relative shrink-0 w-[16px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 22">
        <g id="Margin">
          <path d={svgPaths.p12a32500} fill="var(--fill-0, #CFC6B3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Home</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Margin12 />
        <Container21 />
      </div>
    </div>
  );
}

function Margin13() {
  return (
    <div className="h-[22px] relative shrink-0 w-[20px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
        <g id="Margin">
          <path d={svgPaths.p15b83880} fill="var(--fill-0, #CFC6B3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Scan</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Margin13 />
        <Container22 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p210fe134} fill="var(--fill-0, #E1C471)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[4px] relative shrink-0 z-[2]" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e1c471] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Alerts</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col isolate items-center justify-center relative size-full">
        <Container23 />
        <Container25 />
      </div>
    </div>
  );
}

function Margin14() {
  return (
    <div className="h-[22px] relative shrink-0 w-[18px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Margin">
          <path d={svgPaths.p30837e80} fill="var(--fill-0, #CFC6B3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Analytics</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Margin14 />
        <Container26 />
      </div>
    </div>
  );
}

function Margin15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Margin">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #CFC6B3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Profile</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Margin15 />
        <Container27 />
      </div>
    </div>
  );
}

function SharedComponentBottomNavBar() {
  return (
    <div className="absolute bg-[#201f1f] bottom-0 content-stretch flex gap-[10.8px] h-[80px] items-center left-0 pl-[13.39px] pr-[13.41px] pt-px w-[390px]" data-name="Shared Component: BottomNavBar">
      <div aria-hidden className="absolute border-[#4c4638] border-solid border-t inset-0 pointer-events-none" />
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

export default function AlertsHistory() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(19, 19, 19) 0%, rgb(19, 19, 19) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Alerts History">
      <HeaderTopAppBar />
      <MainScrollableContent />
      <SharedComponentBottomNavBar />
    </div>
  );
}