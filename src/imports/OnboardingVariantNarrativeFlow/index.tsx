import svgPaths from "./svg-ixbswsedwh";
import imgImage from "./00e242011bb0d8221bf901a85f5b78a8913e62bd.png";

function VerticalPagination() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] relative shrink-0" data-name="Vertical Pagination">
      <div className="bg-[#ffe08a] h-[32px] relative rounded-[9999px] shadow-[0px_0px_10px_0px_rgba(255,224,138,0.5)] shrink-0 w-[4px]" data-name="Background+Shadow" />
      <div className="bg-[#353534] h-[12px] relative rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
      <div className="bg-[#353534] h-[12px] relative rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#786219] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">Next</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #786219)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function AsymmetricButton() {
  return (
    <div className="bg-[#ffe08a] drop-shadow-[0px_10px_15px_rgba(255,224,138,0.3)] flex-[1_0_0] h-[64px] min-w-px relative rounded-bl-[9999px] rounded-br-[32px] rounded-tl-[9999px] rounded-tr-[32px]" data-name="Asymmetric Button">
      <div aria-hidden className="absolute border border-[rgba(255,224,138,0.5)] border-solid inset-0 pointer-events-none rounded-bl-[9999px] rounded-br-[32px] rounded-tl-[9999px] rounded-tr-[32px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[33px] py-px relative size-full">
          <Container />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function BottomFixedControls() {
  return (
    <div className="absolute bg-gradient-to-t bottom-0 content-stretch flex from-[#131200] items-end justify-between left-0 pb-[32px] pt-[80px] px-[16px] right-0 to-[rgba(19,18,0,0)] via-1/2 via-[rgba(19,18,0,0.9)] z-[3]" data-name="Bottom Fixed Controls">
      <VerticalPagination />
      <AsymmetricButton />
    </div>
  );
}

function Container2() {
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
    <div className="backdrop-blur-[6px] bg-[rgba(19,18,0,0.4)] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(76,70,56,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-80 relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffe08a] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">SKIP</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function AsymmetricImageCrop() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[486.19px] left-[15%] overflow-clip right-0 rounded-bl-[24px] rounded-tl-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[16px]" data-name="Asymmetric Image Crop">
      <div className="absolute flex inset-[-24.31px_-16.58px_-24.31px_-16.57px] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[111.96%] left-[-7%] max-w-none top-[-3.59%] w-[110%]" src={imgImage} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-gradient-to-r from-[#131200] inset-0 opacity-80 to-[rgba(19,18,0,0)] via-1/2 via-[rgba(19,18,0,0)]" data-name="Gradient" />
      <div className="absolute bg-gradient-to-t from-[#131200] inset-0 opacity-60 to-[rgba(19,18,0,0)] via-1/2 via-[rgba(19,18,0,0)]" data-name="Gradient" />
    </div>
  );
}

function Heading() {
  return (
    <div className="[word-break:break-word] drop-shadow-[0px_4px_1.5px_rgba(0,0,0,0.1),0px_10px_4px_rgba(0,0,0,0.04)] font-['Inter:Black',sans-serif] font-black h-[163.19px] leading-[0] mix-blend-screen not-italic relative shrink-0 text-[48px] tracking-[-2.4px] uppercase w-full whitespace-nowrap" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#ffe08a] top-[19.5px]">
        <p className="leading-[40.8px]">TRACK</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#e5e2e1] top-[60.29px]">
        <p className="leading-[40.8px]">YOUR</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[64px] text-[#e1c471] top-[101.09px]">
        <p className="leading-[40.8px]">BLINKS</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#ffe08a] top-[141.89px]">
        <p className="leading-[40.8px]">IN REAL-TIME</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="max-w-[320px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cfc6b3] text-[18px] w-full">
          <p className="leading-[29.25px] mb-0">Utilize advanced camera</p>
          <p className="leading-[29.25px] mb-0">monitoring to keep a close</p>
          <p className="leading-[29.25px] mb-0">watch on your blink rate and</p>
          <p className="leading-[29.25px] mb-0">ensure optimal eye hydration</p>
          <p className="leading-[29.25px] mb-0">throughout your deep work</p>
          <p className="leading-[29.25px]">sessions.</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[18px] relative shrink-0 w-[287px]" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#ffe08a] border-l-2 border-solid inset-0 pointer-events-none" />
      <Container3 />
    </div>
  );
}

function EditorialTextContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-end left-0 px-[16px] right-[39px] top-[422.19px]" data-name="Editorial Text Content">
      <Heading />
      <VerticalBorder />
    </div>
  );
}

function MainScrollableContent() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full z-[1]" data-name="Main Scrollable Content">
      <AsymmetricImageCrop />
      <EditorialTextContent />
    </div>
  );
}

export default function OnboardingVariantNarrativeFlow() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(19, 18, 0) 0%, rgb(19, 18, 0) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Onboarding Variant: Narrative Flow">
      <BottomFixedControls />
      <Header />
      <MainScrollableContent />
    </div>
  );
}