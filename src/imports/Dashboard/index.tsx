import svgPaths from "./svg-mkcdql510j";

function Heading() {
  return (
    <div className="flex-[1_0_0] h-[22.5px] min-w-px relative" data-name="Heading 2">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[18px] text-white top-[10.5px] tracking-[-0.27px] w-[107.78px]">
        <p className="leading-[22.5px]">Hi, Monish 👋</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center max-w-[480px] overflow-clip relative rounded-[9999px] shrink-0" data-name="Button">
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

function SharedTopNavItemsStructure() {
  return (
    <div className="bg-[#131313] relative shrink-0 w-full" data-name="Shared Top Nav Items Structure">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[8px] pt-[16px] px-[16px] relative size-full">
          <Heading />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return <div className="h-full relative w-[160px]" data-name="SVG" />;
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[32px] text-center tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[48px]">78</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">/100</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[160px]" data-name="Container">
      <div className="flex flex-[1_0_0] h-[160px] items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw]">
          <Svg />
        </div>
      </div>
      <Container4 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[192px] items-start py-[16px] relative shrink-0 w-[160px]" data-name="Margin">
      <Container3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-[288px] relative self-stretch" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Eye Health Score</p>
      </div>
      <Margin />
    </div>
  );
}

function GaugeSection() {
  return (
    <div className="h-[272px] relative shrink-0 w-full" data-name="Gauge Section">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[24px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] h-[30px] leading-[0] not-italic relative shrink-0 text-center w-[55.56px] whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center left-[calc(50%-14.49px)] text-[#e5e2e1] text-[24px] top-[14.5px]">
        <p className="leading-[30px]">14</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-[calc(50%+13.28px)] text-[#cfc6b3] text-[14px] top-[17.5px]">
        <p className="leading-[20px]">/min</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#ffe08a] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Paragraph />
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#201f1f] min-w-[111px] relative rounded-[32px] self-stretch shrink-0 w-[173.09px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#4c4638] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-col items-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-w-[inherit] p-[17px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Margin1 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[21px]">Blink Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="[word-break:break-word] h-[30px] leading-[0] not-italic relative shrink-0 text-center w-[55.38px] whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center left-[calc(50%-12.11px)] text-[#e5e2e1] text-[24px] top-[14.5px]">
        <p className="leading-[30px]">45</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-[calc(50%+15.58px)] text-[#cfc6b3] text-[14px] top-[17.5px]">
        <p className="leading-[20px]">{` cm`}</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#e1c471] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Paragraph1 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#201f1f] min-w-[111px] relative rounded-[32px] self-stretch shrink-0 w-[172.91px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#4c4638] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-col items-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-w-[inherit] p-[17px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Margin2 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[21px]">Distance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCards() {
  return (
    <div className="h-[121px] relative shrink-0 w-full" data-name="Metric Cards">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-start justify-center px-[16px] py-[12px] relative size-full">
          <BackgroundBorder />
          <BackgroundBorder1 />
        </div>
      </div>
    </div>
  );
}

function Heading3Recommendations() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3 - Recommendations">
      <div className="content-stretch flex flex-col items-start pb-[16px] pt-[24px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[18px] tracking-[-0.27px] w-full">
          <p className="leading-[22.5px]">Recommendations</p>
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] w-full">
          <p className="leading-[24px]">20-20-20 Rule</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[14px] w-full">
          <p className="leading-[19.25px] mb-0">Every 20 minutes, look at something 20 feet</p>
          <p className="leading-[19.25px]">away for at least 20 seconds.</p>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#201f1f] relative rounded-[48px] shrink-0 w-full" data-name="Card 1">
      <div aria-hidden className="absolute border-[#ffe08a] border-l-4 border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[20px] pr-[16px] py-[16px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] rounded-[48px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Card 1:shadow" />
        <Heading1 />
        <Container10 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] w-full">
          <p className="leading-[24px]">Blink More Often</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[14px] w-full">
          <p className="leading-[19.25px] mb-0">Your blink rate is slightly below optimal. Make a</p>
          <p className="leading-[19.25px]">conscious effort to blink frequently.</p>
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#201f1f] relative rounded-[48px] shrink-0 w-full" data-name="Card 2">
      <div aria-hidden className="absolute border-[#ffe08a] border-l-4 border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[20px] pr-[16px] py-[16px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] rounded-[48px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Card 2:shadow" />
        <Heading2 />
        <Container11 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] w-full">
          <p className="leading-[24px]">Increase Distance</p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[14px] w-full">
          <p className="leading-[19.25px] mb-0">Try to maintain a minimum of 50cm distance</p>
          <p className="leading-[19.25px]">from your screen to reduce strain.</p>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#201f1f] relative rounded-[48px] shrink-0 w-full" data-name="Card 3">
      <div aria-hidden className="absolute border-[#ffe08a] border-l-4 border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[20px] pr-[16px] py-[16px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] rounded-[48px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Card 3:shadow" />
        <Heading3 />
        <Container12 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[96px] px-[16px] relative size-full">
        <Card />
        <Card1 />
        <Card2 />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#131313] content-stretch flex flex-col items-start min-h-[943px] overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Background">
      <SharedTopNavItemsStructure />
      <GaugeSection />
      <MetricCards />
      <Heading3Recommendations />
      <Container9 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p1820480} fill="var(--fill-0, #FFE08A)" id="Icon" />
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
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffe08a] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[18px]">Home</p>
      </div>
    </div>
  );
}

function Button1() {
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
    <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
        <g id="Container">
          <path d={svgPaths.p15b83880} fill="var(--fill-0, #CFC6B3)" id="Icon" />
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
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[18px]">Scan</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Margin4 />
        <Container16 />
      </div>
    </div>
  );
}

function Container17() {
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

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[18px]">Alerts</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Margin5 />
        <Container18 />
      </div>
    </div>
  );
}

function Container19() {
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

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[18px]">Analytics</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Margin6 />
        <Container20 />
      </div>
    </div>
  );
}

function Container21() {
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

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[18px]">Profile</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Margin7 />
        <Container22 />
      </div>
    </div>
  );
}

function SharedBottomNavItemStructure() {
  return (
    <div className="absolute bg-[#201f1f] bottom-0 content-stretch drop-shadow-[0px_-4px_12px_rgba(0,0,0,0.4)] flex gap-[10.8px] h-[80px] items-center left-0 pb-[24px] pl-[13.39px] pr-[13.41px] pt-[13px] right-0" data-name="Shared Bottom Nav Item Structure">
      <div aria-hidden className="absolute border-[#4c4638] border-solid border-t inset-0 pointer-events-none" />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(19, 19, 19) 0%, rgb(19, 19, 19) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Dashboard">
      <Background />
      <SharedBottomNavItemStructure />
    </div>
  );
}