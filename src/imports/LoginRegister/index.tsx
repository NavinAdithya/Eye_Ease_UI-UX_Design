import svgPaths from "./svg-ava4vzbm9c";

function Margin() {
  return (
    <div className="h-[46px] relative shrink-0 w-[44px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 46">
        <g id="Margin">
          <path d={svgPaths.p1e27a000} fill="var(--fill-0, #FFE08A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">EyeEase</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#98907f] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Protecting Your Eyes</p>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[384px] relative shrink-0 w-full" data-name="Header Section">
      <Margin />
      <Heading />
      <Margin1 />
    </div>
  );
}

function HeaderSectionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[384px] pb-[40px] relative shrink-0 w-full" data-name="Header Section:margin">
      <HeaderSection />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[32.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.6667 13.3333">
        <g id="Container">
          <path d={svgPaths.p2598bae0} fill="var(--fill-0, #98907F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#98907f] text-[16px] w-full">
        <p className="leading-[normal]">Email address</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[18px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function LabelEmailInput() {
  return (
    <div className="bg-[#201f1f] content-stretch flex items-center p-px relative rounded-[48px] shrink-0 w-full" data-name="Label - Email Input">
      <div aria-hidden className="absolute border border-[rgba(76,70,56,0.3)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <Container />
      <Input />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[29.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3333 17.5">
        <g id="Container">
          <path d={svgPaths.pc7cbf0} fill="var(--fill-0, #98907F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#98907f] text-[16px] w-full">
        <p className="leading-[normal]">Password</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[18px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 16.5">
        <g id="Container">
          <path d={svgPaths.pf0742c0} fill="var(--fill-0, #98907F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pr-[16px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function LabelPasswordInput() {
  return (
    <div className="bg-[#201f1f] content-stretch flex items-center p-px relative rounded-[48px] shrink-0 w-full" data-name="Label - Password Input">
      <div aria-hidden className="absolute border border-[rgba(76,70,56,0.3)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <Container2 />
      <Input1 />
      <Button />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffe08a] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Forgot password?</p>
      </div>
    </div>
  );
}

function ForgotPassword() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-end relative shrink-0 w-full" data-name="Forgot Password">
      <Link />
    </div>
  );
}

function LoginButton() {
  return (
    <div className="bg-[#ffe08a] content-stretch drop-shadow-[0px_4px_7px_rgba(255,224,138,0.15)] flex flex-col h-[56px] items-center justify-center relative rounded-[48px] shrink-0 w-full" data-name="Login Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#241a00] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Log In</p>
      </div>
    </div>
  );
}

function LoginButtonMargin() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start pt-[8px] relative shrink-0 w-full" data-name="Login Button:margin">
      <LoginButton />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#98907f] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">or continue with</p>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Divider">
      <div className="bg-[rgba(76,70,56,0.5)] h-px relative shrink-0 w-[102.08px]" data-name="Horizontal Divider" />
      <Container5 />
      <div className="bg-[rgba(76,70,56,0.5)] h-px relative shrink-0 w-[102.09px]" data-name="Horizontal Divider" />
    </div>
  );
}

function DividerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start py-[16px] relative shrink-0 w-full" data-name="Divider:margin">
      <Divider />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p29ad9380} fill="var(--fill-0, #4285F4)" id="Vector" />
          <path d={svgPaths.p73c0a80} fill="var(--fill-0, #34A853)" id="Vector_2" />
          <path d={svgPaths.p1f69ba00} fill="var(--fill-0, #FBBC05)" id="Vector_3" />
          <path d={svgPaths.p3d0b3f00} fill="var(--fill-0, #EA4335)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function ButtonGoogleSignIn() {
  return (
    <div className="bg-[#131313] content-stretch flex gap-[12px] h-[56px] items-center justify-center p-px relative rounded-[48px] shrink-0 w-full" data-name="Button - Google Sign In">
      <div aria-hidden className="absolute border border-[#4c4638] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <Svg />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5e2e1] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Google</p>
      </div>
    </div>
  );
}

function FormSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[384px] relative shrink-0 w-full" data-name="Form Section">
      <LabelEmailInput />
      <LabelPasswordInput />
      <ForgotPassword />
      <LoginButtonMargin />
      <DividerMargin />
      <ButtonGoogleSignIn />
    </div>
  );
}

function Footer() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[3.99px] items-start leading-[0] not-italic relative shrink-0 text-[16px] whitespace-nowrap" data-name="Footer">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#98907f]">
        <p className="leading-[24px]">{`Don't have an account? `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#ffe08a]">
        <p className="leading-[24px]">Register</p>
      </div>
    </div>
  );
}

function FooterMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0" data-name="Footer:margin">
      <Footer />
    </div>
  );
}

export default function LoginRegister() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[126px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(19, 19, 19) 0%, rgb(19, 19, 19) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Login / Register">
      <HeaderSectionMargin />
      <FormSection />
      <FooterMargin />
    </div>
  );
}