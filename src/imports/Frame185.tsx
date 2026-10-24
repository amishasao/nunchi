import clsx from "clsx";
import svgPaths from "./svg-0klmqxl6ml";
import img3DAvatars17 from "figma:asset/a7e8150b48421155ec56805f777056f57141df11.png";
import img3DAvatars20 from "figma:asset/633f85a8183a9043a1490dbabccae2c5cd82170e.png";
import img3DAvatars12 from "figma:asset/eaa320717b7e77fd08d1bdaf9802cc375eb36366.png";
import img3DAvatars10 from "figma:asset/6e4d877ce9c070a34ca062eebd3f33d8c1dac952.png";
import img3DAvatars15 from "figma:asset/b45fff6b8e9ca09258e544c7bd3e6cd00180d427.png";
import img3DAvatars13 from "figma:asset/436985b609d053075017d7f78ccd2d5f7d059fcf.png";
import img3DAvatars11 from "figma:asset/e94ab0fb805f87cde4c201f6a72ac4ed80d9e261.png";
import imgImage1 from "figma:asset/3187ff71b5c5ad6ccbef78b4668b481770aa5884.png";
import imgImage2 from "figma:asset/b324ad8a3b5bb7bdca54e752c230d984f0b44f14.png";
import imgColorHuntPaletteFf8080Ffcf96F6Fdc3Cdfad51 from "figma:asset/a790816c7bbc39c5e708b0712efd0c02c1584c98.png";

function Wrapper10({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type Wrapper9Props = {
  additionalClassNames?: string;
};

function Wrapper9({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper9Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={additionalClassNames}>
      <p className="leading-[22px]">{children}</p>
    </div>
  );
}
type Wrapper8Props = {
  additionalClassNames?: string;
};

function Wrapper8({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper8Props>) {
  return <Wrapper9 additionalClassNames={clsx("flex flex-col justify-center relative shrink-0", additionalClassNames)}>{children}</Wrapper9>;
}
type Wrapper7Props = {
  additionalClassNames?: string;
};

function Wrapper7({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper7Props>) {
  return <Wrapper9 additionalClassNames={clsx("flex flex-col justify-center leading-[0] relative shrink-0 text-black whitespace-nowrap", additionalClassNames)}>{children}</Wrapper9>;
}

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[8px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        {children}
      </svg>
    </div>
  );
}
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[33px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        {children}
      </svg>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper4>
      <g id="home">{children}</g>
    </Wrapper4>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper4>
      <g id="filter_vintage">{children}</g>
    </Wrapper4>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper4>
      <g id="local_fire_department">{children}</g>
    </Wrapper4>
  );
}
type Text12Props = {
  text: string;
};

function Text12({ text, children }: React.PropsWithChildren<Text12Props>) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Noto_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7c7c7c] text-[36px] whitespace-nowrap">{text}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0]">{children}</div>
      </div>
    </div>
  );
}
type Text11Props = {
  text: string;
  additionalClassNames?: string;
};

function Text11({ text, additionalClassNames = "" }: Text11Props) {
  return (
    <div style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }} className={clsx("flex flex-col font-['Noto_Sans:Italic',sans-serif] font-normal italic justify-center relative shrink-0 text-[#7c7c7c] text-[17px]", additionalClassNames)}>
      <p className="leading-[normal]">{text}</p>
    </div>
  );
}
type Text10Props = {
  text: string;
};

function Text10({ text }: Text10Props) {
  return (
    <Text12 text={text}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 578 2">
        <path d="M0 1H578" id="Vector 2" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="2" />
      </svg>
    </Text12>
  );
}
type Text9Props = {
  text: string;
};

function Text9({ text }: Text9Props) {
  return (
    <div className="-translate-x-1/2 absolute bg-black h-[43px] left-1/2 overflow-clip rounded-[19px] top-[737px] w-[334px]">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] h-[34px] leading-[normal] left-[89px] not-italic text-[24px] text-white top-[4px] tracking-[-0.48px] w-[156px]">{text}</p>
    </div>
  );
}
type BrandAwarenessProps = {
  additionalClassNames?: string;
};

function BrandAwareness({ additionalClassNames = "" }: BrandAwarenessProps) {
  return (
    <button className={clsx("absolute block cursor-pointer size-[37px] top-[62px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g id="brand_awareness">
          <mask height="37" id="mask0_1_1656" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="37" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="37" id="Bounding box" width="37" />
          </mask>
          <g mask="url(#mask0_1_1656)">
            <path d={svgPaths.p2158b6b0} fill="var(--fill-0, #1C1B1F)" id="brand_awareness_2" />
          </g>
        </g>
      </svg>
    </button>
  );
}
type KeyboardDoubleArrowRightProps = {
  additionalClassNames?: string;
};

function KeyboardDoubleArrowRight({ additionalClassNames = "" }: KeyboardDoubleArrowRightProps) {
  return (
    <Wrapper5 additionalClassNames={clsx("absolute size-[24px]", additionalClassNames)}>
      <g id="keyboard_double_arrow_right">
        <mask height="24" id="mask0_1_1660" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
          <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
        </mask>
        <g mask="url(#mask0_1_1660)">
          <path d={svgPaths.p17f0ad00} fill="var(--fill-0, white)" id="keyboard_double_arrow_right_2" />
        </g>
      </g>
    </Wrapper5>
  );
}

function ImageImage() {
  return (
    <div className="absolute h-[340px] left-[-3px] top-[-14px] w-[363px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[145.76%] left-[-85.8%] max-w-none top-[-22.73%] w-[273.3%]" src={imgImage1} />
      </div>
    </div>
  );
}
type Text8Props = {
  text: string;
  additionalClassNames?: string;
};

function Text8({ text, additionalClassNames = "" }: Text8Props) {
  return (
    <div className={clsx("absolute bg-white content-stretch flex flex-col items-center justify-center pl-[3px] pr-[5px] pt-[4px] rounded-[14.5px] size-[29px]", additionalClassNames)}>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type Text7Props = {
  text: string;
};

function Text7({ text }: Text7Props) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Wrapper>
        <mask height="33" id="mask0_1_1664" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="33" x="0" y="0">
          <rect fill="var(--fill-0, #D9D9D9)" height="33" id="Bounding box" width="33" />
        </mask>
        <g mask="url(#mask0_1_1664)">
          <path d={svgPaths.pe398c80} fill="var(--fill-0, black)" id="local_fire_department_2" />
        </g>
      </Wrapper>
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[12px] leading-[22px] relative shrink-0 text-[15px] text-black text-center w-[51px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type Text6Props = {
  text: string;
};

function Text6({ text }: Text6Props) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Home />
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[12px] leading-[22px] relative shrink-0 text-[#767676] text-[15px] text-center w-[55px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type Text5Props = {
  text: string;
};

function Text5({ text }: Text5Props) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[27px]" data-name="person">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
          <path d={svgPaths.p27132f00} fill="var(--fill-0, #767676)" id="person" />
        </svg>
      </div>
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[22px] leading-[22px] relative shrink-0 text-[#767676] text-[15px] text-center w-[48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <FilterVintage />
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[12px] leading-[22px] relative shrink-0 text-[#767676] text-[15px] text-center w-[65px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function FilterVintage() {
  return (
    <Wrapper1>
      <mask height="33" id="mask0_1_1676" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="33" x="0" y="0">
        <rect fill="var(--fill-0, #D9D9D9)" height="33" id="Bounding box" width="33" />
      </mask>
      <g mask="url(#mask0_1_1676)">
        <path d={svgPaths.pf6b9b80} fill="var(--fill-0, #767676)" id="filter_vintage_2" />
      </g>
    </Wrapper1>
  );
}

function Frame192Helper() {
  return (
    <Wrapper6>
      <circle cx="4" cy="4" fill="var(--fill-0, #767676)" id="Ellipse 2" r="4" />
    </Wrapper6>
  );
}

function Helper2() {
  return (
    <Wrapper6>
      <circle cx="4" cy="4" fill="var(--fill-0, #767676)" id="Ellipse 8" r="4" />
    </Wrapper6>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] overflow-clip relative shrink-0 text-black w-full whitespace-nowrap">
      <Wrapper8 additionalClassNames="font-['SF_Pro:Medium',sans-serif] font-[510] text-[12px]">{text}</Wrapper8>
      <div className="content-stretch flex flex-col font-['SF_Pro:Light',sans-serif] font-[274.31500244140625] items-start overflow-clip relative shrink-0 text-[10px] w-full">
        <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          <ol start="1">
            <li className="ms-[15px] whitespace-pre-wrap">
              <span className="leading-[22px]">{"Descriptive suggestion...."}</span>
            </li>
          </ol>
        </div>
        <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          <ol start="2">
            <li className="ms-[15px] whitespace-pre-wrap">
              <span className="leading-[22px]">{"Descriptive suggestion...."}</span>
            </li>
          </ol>
        </div>
        <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          <ol start="3">
            <li className="ms-[15px] whitespace-pre-wrap">
              <span className="leading-[22px]">{"Descriptive suggestion...."}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex font-['SF_Pro:Regular',sans-serif] font-normal items-start justify-between leading-[0] overflow-clip relative shrink-0 text-[10px] text-black w-[354px] whitespace-nowrap">
      <Wrapper8>{text}</Wrapper8>
      <Wrapper8>{text1}</Wrapper8>
    </div>
  );
}

function Helper() {
  return (
    <Wrapper6>
      <circle cx="4" cy="4" fill="var(--fill-0, #767676)" id="Ellipse 1" r="4" />
    </Wrapper6>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <LocalFireDepartment />
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[#767676] text-[15px] text-center w-[51px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function LocalFireDepartment() {
  return (
    <Wrapper>
      <mask height="33" id="mask0_1_1694" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="33" x="0" y="0">
        <rect fill="var(--fill-0, #D9D9D9)" height="33" id="Bounding box" width="33" />
      </mask>
      <g mask="url(#mask0_1_1694)">
        <path d={svgPaths.pe398c80} fill="var(--fill-0, #767676)" id="local_fire_department_2" />
      </g>
    </Wrapper>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Home />
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[#767676] text-[15px] text-center w-[55px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function Home() {
  return (
    <Wrapper2>
      <mask height="33" id="mask0_1_1721" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="33" x="0" y="0">
        <rect fill="var(--fill-0, #D9D9D9)" height="33" id="Bounding box" width="33" />
      </mask>
      <g mask="url(#mask0_1_1721)">
        <path d={svgPaths.p245c0000} fill="var(--fill-0, #767676)" id="home_2" />
      </g>
    </Wrapper2>
  );
}
type ObFormsIntentionTextProps = {
  text: string;
};

function ObFormsIntentionText({ text }: ObFormsIntentionTextProps) {
  return (
    <button className="block cursor-pointer h-[28px] relative shrink-0 w-[300px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0_0.33%_0_11%] leading-[24px] not-italic text-[14px] text-black text-left">{text}</p>
      <div className="absolute border border-[#e2e1e5] border-solid bottom-1/4 left-[1.33%] right-[93.67%] rounded-[5px] top-[21.43%]" data-name="Rectangle" role="button" tabIndex="0" />
    </button>
  );
}
type FrameTextProps = {
  text: string;
};

function FrameText({ text }: FrameTextProps) {
  return (
    <div className="absolute bg-white left-0 right-0 rounded-[5px] top-[28px]">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[15px] py-[10px] relative rounded-[inherit] w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d2d2d2] text-[14px] whitespace-nowrap">{text}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e1e5] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center py-[12px] relative", additionalClassNames)}>
      <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[40px] relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">{text}</p>
    </div>
  );
}
type StatusBarIPhoneProps = {
  className?: string;
  time?: string;
};

function StatusBarIPhone({ className, time = "9:41" }: StatusBarIPhoneProps) {
  return (
    <div className={className || "relative w-[402px]"} data-name="Status bar - iPhone">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[24px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[1.5px] relative" data-name="Time">
            <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {time}
            </p>
          </div>
          <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Levels">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[7px] items-center justify-center pr-px pt-px relative size-full">
                <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
                    <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
                  </svg>
                </div>
                <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
                    <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
                  </svg>
                </div>
                <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Frame">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
                    <g id="Frame">
                      <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
                      <path d={svgPaths.p7a14d80} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
                      <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type GenericAvatarProps = {
  className?: string;
  letter?: string;
  style?: "Check" | "Monogram" | "Avatar";
};

function GenericAvatar({ className, letter = "A", style = "Avatar" }: GenericAvatarProps) {
  const isCheck = style === "Check";
  const isMonogram = style === "Monogram";
  const isMonogramOrCheck = ["Monogram", "Check"].includes(style);
  return (
    <div className={className || `relative size-[40px] ${isMonogramOrCheck ? "" : "bg-[#eaddff] overflow-clip rounded-[100px]"}`}>
      {isMonogramOrCheck && (
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          {isMonogram && <circle cx="20" cy="20" fill="var(--fill-0, #EADDFF)" id="Background" r="20" />}
          {isCheck && <path clipRule="evenodd" d={svgPaths.p1fd92980} fill="var(--fill-0, #EADDFF)" fillRule="evenodd" id="Background" />}
        </svg>
      )}
      {style === "Avatar" && (
        <div className="absolute bottom-[10.92%] left-[14.77%] right-[14.77%] top-1/4" data-name="Avatar Placeholder">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.1841 25.6321">
            <g id="Avatar Placeholder">
              <path clipRule="evenodd" d={svgPaths.pb52dd00} fill="var(--fill-0, #4F378A)" fillRule="evenodd" />
              <path d={svgPaths.p1df7e300} fill="var(--fill-0, #4F378A)" />
            </g>
          </svg>
        </div>
      )}
      {isMonogram && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 size-[40px] text-[#4f378a] text-[16px] text-center top-1/2 tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24px]">{letter}</p>
        </div>
      )}
      {isCheck && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.1px)] size-[24.208px] top-[calc(50%+0.1px)]" data-name="Check">
          <div className="absolute inset-[23.29%_12.5%_20.83%_14.21%]" data-name="icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.59 13.41">
              <path d={svgPaths.p3decff0} fill="var(--fill-0, black)" id="icon" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-white content-stretch flex flex-col h-[874px] items-center justify-between left-[568px] overflow-clip px-[10px] top-0 w-[402px]" data-name="iPhone 17 - 1">
        <StatusBarIPhone className="relative shrink-0 w-[402px]" />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center min-h-px min-w-px relative w-full">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[50px] relative w-full">
                <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold h-[50px] justify-center leading-[0] relative shrink-0 text-[32px] text-black text-center w-[318px]">
                  <p className="leading-[46px]">Start a new Activity</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0">
            <div className="h-[84px] overflow-clip relative shrink-0 w-[300px]" data-name="OB Forms/Name of Activity">
              <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium inset-[1.19%_0_65.48%_0] justify-center leading-[0] not-italic text-[16px] text-black">
                <p>
                  <span className="leading-[40px]">Name of Activity</span>
                  <span className="leading-[40px] text-[red]">*</span>
                </p>
              </div>
              <FrameText text="Name of Activity" />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <p className="font-['Inter:Regular',sans-serif] font-normal h-[28px] leading-[0] not-italic relative shrink-0 text-[14px] text-black w-[300px]">
                <span className="leading-[28px]">Select your Intention(s)</span>
                <span className="leading-[28px] text-[red]">*</span>
              </p>
              <ObFormsIntentionText text="Discussion" />
              <ObFormsIntentionText text="Onboarding" />
              <ObFormsIntentionText text="Interview" />
              <ObFormsIntentionText text="Research" />
              <ObFormsIntentionText text="Coffee Chat" />
            </div>
            <div className="relative shrink-0 w-[300px]">
              <div className="content-stretch flex flex-col items-start relative w-full">
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[300px]">
                  <p className="leading-[40px]">Intention Other</p>
                </div>
                <div className={`relative rounded-[5px] shrink-0 w-[300px] ${"default" === "disabled" ? "bg-[#d8d8d8]" : "bg-white"}`} data-name="Frame">
                  <div className="content-stretch flex flex-col items-start overflow-clip px-[15px] py-[10px] relative rounded-[inherit] w-full">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#d2d2d2] text-[14px] w-[min-content]">Intention Other</p>
                    <div className="h-[40px] shrink-0 w-px" data-name="MinHeight" />
                  </div>
                  <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[5px] ${["focus", "hover"].includes("default") ? "border-[#222]" : "default" === "error" ? "border-[#f14668]" : "border-[#e2e1e5]"}`} />
                </div>
              </div>
            </div>
            <div className="h-[84px] overflow-clip relative shrink-0 w-[300px]" data-name="OB Forms/Name of Activity">
              <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium inset-[1.19%_0_65.48%_0] justify-center leading-[0] not-italic text-[16px] text-black">
                <p className="leading-[40px]">Participants</p>
              </div>
              <FrameText text="Participants" />
            </div>
          </div>
          <div className="bg-[#2e3a3f] relative rounded-[20px] shadow-[6px_2px_4px_0px_rgba(0,0,0,0.12)] shrink-0">
            <div className="flex flex-row items-center justify-center size-full">
              <Text text="Start Activity" additionalClassNames="px-[38px]" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[43px] h-[71px] items-center justify-center relative shrink-0 w-[402px]">
          <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
          <Text1 text="Home" />
          <Text2 text="Heat" />
          <div className="content-stretch flex flex-col items-center relative shrink-0">
            <Wrapper1>
              <mask height="33" id="mask0_1_1717" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="33" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="33" id="Bounding box" width="33" />
              </mask>
              <g mask="url(#mask0_1_1717)">
                <path d={svgPaths.pf6b9b80} fill="var(--fill-0, black)" id="filter_vintage_2" />
              </g>
            </Wrapper1>
            <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[15px] text-black text-center w-[65px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Activity
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
            <Wrapper4>
              <path d={svgPaths.p17f11400} fill="var(--fill-0, #767676)" id="person" />
            </Wrapper4>
            <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[22px] leading-[22px] relative shrink-0 text-[#767676] text-[15px] text-center w-[48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              John
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col h-[874px] items-center left-[1166px] overflow-clip top-0 w-[402px]" data-name="iPhone 17 - 2">
        <StatusBarIPhone className="relative shrink-0 w-[402px]" />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-full">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center pb-[67px] pt-[10px] px-[10px] relative w-full">
                <div className="bg-[#7fa7b8] h-[147px] mb-[-57px] shrink-0 w-[402px]" />
                <GenericAvatar className="bg-[#eaddff] mb-[-57px] overflow-clip relative rounded-[100px] shrink-0 size-[122px]" />
              </div>
            </div>
          </div>
          <div className="h-[70px] relative shrink-0 w-full">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[4px] items-start px-[24px] relative size-full">
                <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold h-[38px] justify-center leading-[0] relative shrink-0 text-[32px] text-black w-full">
                  <p className="leading-[46px]">John Doe</p>
                </div>
                <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[86px]">
                    <p className="leading-[40px]">Position</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[14px] py-[17px] relative w-full">
                <div className="flex flex-col font-['Raleway:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-black whitespace-nowrap">
                  <p className="leading-[40px]">Interactions today</p>
                </div>
                <div className="bg-[#9fbfa8] relative rounded-[20px] shrink-0 w-full">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col gap-[8px] items-start p-[10px] relative w-full">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[354px]">
                          <Wrapper7 additionalClassNames="font-['SF_Pro:Medium',sans-serif] font-[510] text-[12px]">Meeting at 3:30 pm</Wrapper7>
                          <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0">
                            <Wrapper7 additionalClassNames="font-['SF_Pro:Regular',sans-serif] font-normal text-[10px]">Participants:</Wrapper7>
                            <div className="relative shrink-0 size-[22px]" data-name="3D Avatars / 10">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3DAvatars10} />
                            </div>
                            <div className="relative shrink-0 size-[22px]" data-name="3D Avatars / 12">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3DAvatars12} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full">
                        <Wrapper3>
                          <Helper />
                          <Helper />
                          <Helper />
                          <Helper />
                          <Helper />
                          <Helper />
                          <Wrapper10>
                            <circle cx="8" cy="8" fill="var(--fill-0, #FFDC6B)" id="Ellipse 7" r="8" />
                          </Wrapper10>
                          <Wrapper5 additionalClassNames="relative shrink-0 size-[24px]">
                            <path d={svgPaths.p25332e00} fill="var(--fill-0, #FFBB6B)" id="Ellipse 8" />
                          </Wrapper5>
                          <Wrapper10>
                            <circle cx="8" cy="8" fill="var(--fill-0, #FF9959)" id="Ellipse 9" r="8" />
                          </Wrapper10>
                          <Helper />
                          <Helper />
                          <Helper />
                          <Helper />
                        </Wrapper3>
                        <Helper1 text="Calm" text1="Tense" />
                      </div>
                      <Text3 text="Summary" />
                    </div>
                  </div>
                </div>
                <div className="bg-[#9fbfa8] relative rounded-[20px] shrink-0 w-full">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start p-[10px] relative w-full">
                      <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full">
                        <Wrapper7 additionalClassNames="font-['SF_Pro:Medium',sans-serif] font-[510] text-[12px]">Coffee chat at 5:10 pm</Wrapper7>
                        <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0">
                          <Wrapper7 additionalClassNames="font-['SF_Pro:Regular',sans-serif] font-normal text-[10px]">Participants:</Wrapper7>
                          <div className="relative shrink-0 size-[22px]" data-name="3D Avatars / 15">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3DAvatars15} />
                          </div>
                          <div className="relative shrink-0 size-[22px]" data-name="3D Avatars / 13">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3DAvatars13} />
                          </div>
                          <div className="relative shrink-0 size-[22px]" data-name="3D Avatars / 11">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3DAvatars11} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full">
                        <Wrapper3>
                          <Helper />
                          <Wrapper10>
                            <circle cx="8" cy="8" fill="var(--fill-0, #A1FF8F)" id="Ellipse 2" r="8" />
                          </Wrapper10>
                          <Wrapper5 additionalClassNames="relative shrink-0 size-[24px]">
                            <circle cx="12" cy="12" fill="var(--fill-0, #C9FF8F)" id="Ellipse 3" r="12" />
                          </Wrapper5>
                          <Wrapper10>
                            <circle cx="8" cy="8" fill="var(--fill-0, #F2FF8F)" id="Ellipse 4" r="8" />
                          </Wrapper10>
                          <Helper />
                          <Helper />
                          <Helper />
                          <Helper2 />
                          <Helper />
                          <Helper />
                          <Helper />
                          <Helper />
                          <Helper />
                        </Wrapper3>
                        <Helper1 text="Calm" text1="Tense" />
                      </div>
                      <Text3 text="Summary" />
                    </div>
                  </div>
                </div>
                <div className="bg-[#9fbfa8] content-stretch flex flex-col gap-[4px] items-start overflow-clip p-[10px] relative rounded-[20px] shrink-0 w-[374px]">
                  <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full">
                    <Wrapper7 additionalClassNames="font-['SF_Pro:Medium',sans-serif] font-[510] text-[12px]">Interview at 6:20 pm</Wrapper7>
                    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0">
                      <Wrapper7 additionalClassNames="font-['SF_Pro:Regular',sans-serif] font-normal text-[10px]">Participants:</Wrapper7>
                      <div className="relative shrink-0 size-[22px]" data-name="3D Avatars / 20">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3DAvatars20} />
                      </div>
                      <div className="relative shrink-0 size-[22px]" data-name="3D Avatars / 17">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3DAvatars17} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full">
                    <Wrapper3>
                      <Helper />
                      <Frame192Helper />
                      <Wrapper6>
                        <circle cx="4" cy="4" fill="var(--fill-0, #767676)" id="Ellipse 3" r="4" />
                      </Wrapper6>
                      <Frame192Helper />
                      <Helper />
                      <Helper />
                      <Helper />
                      <Helper2 />
                      <Helper />
                      <Helper />
                      <Helper />
                      <Wrapper10>
                        <circle cx="8" cy="8" fill="var(--fill-0, #FFA880)" id="Ellipse 12" r="8" />
                      </Wrapper10>
                      <Wrapper5 additionalClassNames="relative shrink-0 size-[24px]">
                        <circle cx="12" cy="12" fill="var(--fill-0, #FF8080)" id="Ellipse 13" r="12" />
                      </Wrapper5>
                    </Wrapper3>
                    <Helper1 text="Calm" text1="Tense" />
                  </div>
                  <Text3 text="Summary" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[43px] h-[71px] items-center justify-center relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
          <Text1 text="Home" />
          <Text2 text="Heat" />
          <div className="content-stretch flex flex-col items-center relative shrink-0">
            <FilterVintage />
            <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[#767676] text-[15px] text-center w-[65px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Activity
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
            <Wrapper4>
              <path d={svgPaths.p17f11400} fill="var(--fill-0, black)" id="person" />
            </Wrapper4>
            <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[22px] leading-[22px] relative shrink-0 text-[15px] text-black text-center w-[48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              John
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[874px] left-[1833px] overflow-clip top-0 w-[402px]" data-name="Home">
        <StatusBarIPhone className="absolute left-0 top-0 w-[402px]" />
        <div className="absolute content-stretch flex flex-col gap-[44px] items-center left-[-22px] top-[73px] w-[446px]">
          <div className="content-start flex flex-wrap gap-[6px_116px] items-start relative shrink-0 w-[358px]">
            <div className="bg-[#81a9e5] h-[24px] overflow-clip relative shrink-0 w-[205px]">
              <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal h-[22px] leading-[22px] left-[9px] text-[12px] text-black top-px w-[196px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Upcoming: Today at 3 pm
              </p>
            </div>
            <div className="relative shrink-0 size-[30px]" data-name="settings_heart">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                <g id="settings_heart">
                  <mask height="30" id="mask0_1_1646" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
                    <rect fill="var(--fill-0, #D9D9D9)" height="30" id="Bounding box" width="30" />
                  </mask>
                  <g mask="url(#mask0_1_1646)">
                    <path d={svgPaths.p906f8f0} fill="var(--fill-0, #1C1B1F)" id="settings_heart_2" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="bg-[#81a9e5] h-[106px] overflow-clip relative rounded-[9px] shrink-0 w-[358px]">
              <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] h-[32px] leading-[22px] left-[20px] text-[17px] text-black top-[calc(50%-16px)] w-[255px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Welcome John
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[358px]">
            <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[27px] leading-[22px] relative shrink-0 text-[17px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              Insights
            </p>
            <div className="bg-[#81a9e5] h-[214px] shrink-0 w-full" />
          </div>
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[9px] items-start px-[54px] relative w-full">
              <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[27px] leading-[22px] relative shrink-0 text-[17px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                Recommended
              </p>
              <div className="content-stretch flex gap-[25px] items-center relative shrink-0 w-full">
                <button className="content-stretch cursor-pointer flex flex-col gap-[14px] items-start relative shrink-0 w-[132px]">
                  <div className="bg-[#81a9e5] h-[132px] shrink-0 w-full" />
                  <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[41px] leading-[22px] relative shrink-0 text-[17px] text-black text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Instilling Trust
                  </p>
                </button>
                <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[132px]">
                  <div className="bg-[#81a9e5] h-[132px] shrink-0 w-full" />
                  <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[41px] leading-[22px] relative shrink-0 text-[17px] text-black text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Finding Intent
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[132px]">
                  <div className="bg-[#81a9e5] h-[132px] shrink-0 w-full" />
                  <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[41px] leading-[22px] relative shrink-0 text-[17px] text-black text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Unspoken Cues
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute border border-black border-solid h-[72px] left-0 top-[802px] w-[402px]" />
        <div className="-translate-x-1/2 absolute content-stretch flex gap-[43px] items-start left-[calc(50%+0.5px)] top-[815px]">
          <div className="content-stretch flex flex-col items-center relative shrink-0">
            <Wrapper2>
              <mask height="33" id="mask0_1_1670" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="33" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="33" id="Bounding box" width="33" />
              </mask>
              <g mask="url(#mask0_1_1670)">
                <path d={svgPaths.p245c0000} fill="var(--fill-0, black)" id="home_2" />
              </g>
            </Wrapper2>
            <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[12px] leading-[22px] relative shrink-0 text-[15px] text-black text-center w-[55px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Home
            </p>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0">
            <LocalFireDepartment />
            <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[12px] leading-[22px] relative shrink-0 text-[#767676] text-[15px] text-center w-[51px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Heatmap
            </p>
          </div>
          <Text4 text="Activity" />
          <Text5 text="John" />
        </div>
      </div>
      <div className="absolute bg-white h-[874px] left-[2863px] overflow-clip top-0 w-[402px]" data-name="Heatmap">
        <StatusBarIPhone className="absolute left-0 top-0 w-[402px]" />
        <div className="absolute border border-black border-solid h-[72px] left-0 overflow-clip top-[802px] w-[402px]">
          <div className="-translate-x-1/2 absolute content-stretch flex gap-[43px] items-start left-[calc(50%+0.5px)] top-[12px]">
            <Text6 text="Home" />
            <Text7 text="Heatmap" />
            <Text4 text="Activity" />
            <Text5 text="John" />
          </div>
        </div>
        <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] h-[27px] leading-[22px] left-[22px] text-[17px] text-black top-[70px] w-[154px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Heatmap
        </p>
        <div className="-translate-x-1/2 absolute bg-[#81a9e5] h-[314px] left-1/2 overflow-clip rounded-[9px] top-[105px] w-[358px]">
          <div className="-translate-x-1/2 absolute bg-[#81a9e5] h-[314px] left-1/2 overflow-clip rounded-[9px] top-0 w-[358px]">
            <ImageImage />
            <Text8 text="1" additionalClassNames="left-[32px] top-[47px]" />
            <Text8 text="3" additionalClassNames="left-[72px] top-[233px]" />
            <Text8 text="2" additionalClassNames="left-[245px] top-[151px]" />
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bg-[#81a9e5] h-[53px] left-1/2 overflow-clip rounded-[9px] top-[522px] w-[358px]">
          <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal h-[21px] leading-[22px] left-[22px] text-[17px] text-black top-[18px] w-[167px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            insight 1
          </p>
          <KeyboardDoubleArrowRight additionalClassNames="left-[311px] top-[14px]" />
        </div>
        <div className="-translate-x-1/2 absolute bg-[#81a9e5] h-[53px] left-1/2 overflow-clip rounded-[9px] top-[591px] w-[358px]">
          <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal h-[21px] leading-[22px] left-[22px] text-[17px] text-black top-[17px] w-[167px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            insight 2
          </p>
          <KeyboardDoubleArrowRight additionalClassNames="left-[311px] top-[16px]" />
        </div>
        <div className="-translate-x-1/2 absolute bg-[#81a9e5] h-[53px] left-1/2 overflow-clip rounded-[9px] top-[660px] w-[358px]">
          <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal h-[21px] leading-[22px] left-[22px] text-[17px] text-black top-[16px] w-[167px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            insight 3
          </p>
          <KeyboardDoubleArrowRight additionalClassNames="left-[311px] top-[14px]" />
        </div>
        <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] h-[21px] leading-[22px] left-[23px] text-[17px] text-black top-[480px] w-[145px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Quick Insights
        </p>
        <BrandAwareness additionalClassNames="left-[338px]" />
        <Text9 text="end activity" />
      </div>
      <div className="absolute bg-white h-[874px] left-[3305px] overflow-clip top-0 w-[402px]" data-name="Heatmap">
        <StatusBarIPhone className="absolute left-0 top-0 w-[402px]" />
        <div className="absolute border border-black border-solid h-[72px] left-0 overflow-clip top-[802px] w-[402px]">
          <div className="-translate-x-1/2 absolute content-stretch flex gap-[43px] items-start left-[calc(50%+0.5px)] top-[12px]">
            <Text6 text="Home" />
            <Text7 text="Heatmap" />
            <Text4 text="Activity" />
            <Text5 text="John" />
          </div>
        </div>
        <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] h-[27px] leading-[22px] left-[22px] text-[17px] text-black top-[67px] w-[154px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Heatmap
        </p>
        <div className="-translate-x-1/2 absolute bg-[#81a9e5] h-[314px] left-1/2 overflow-clip rounded-[9px] top-[105px] w-[358px]">
          <ImageImage />
          <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[32px] pl-[3px] pr-[5px] pt-[4px] rounded-[14.5px] size-[29px] top-[47px]">
            <div aria-hidden="true" className="absolute border-6 border-[#81a9e5] border-solid inset-[-6px] pointer-events-none rounded-[20.5px]" />
            <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              1
            </p>
          </div>
          <Text8 text="3" additionalClassNames="left-[72px] top-[233px]" />
          <Text8 text="2" additionalClassNames="left-[245px] top-[151px]" />
        </div>
        <div className="-translate-x-1/2 absolute bg-[#81a9e5] h-[53px] left-1/2 overflow-clip rounded-[9px] top-[522px] w-[358px]">
          <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal h-[21px] leading-[22px] left-[22px] text-[17px] text-black top-[18px] w-[167px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            insight 1
          </p>
          <KeyboardDoubleArrowRight additionalClassNames="left-[323px] top-[16px]" />
        </div>
        <div className="-translate-x-1/2 absolute bg-[#81a9e5] h-[53px] left-1/2 overflow-clip rounded-[9px] top-[591px] w-[358px]">
          <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal h-[21px] leading-[22px] left-[22px] text-[17px] text-black top-[15px] w-[167px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            insight 2
          </p>
          <KeyboardDoubleArrowRight additionalClassNames="left-[321px] top-[14px]" />
        </div>
        <div className="-translate-x-1/2 absolute bg-[#81a9e5] h-[53px] left-1/2 overflow-clip rounded-[9px] top-[660px] w-[358px]">
          <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal h-[21px] leading-[22px] left-[22px] text-[17px] text-black top-[17px] w-[167px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            insight 3
          </p>
          <KeyboardDoubleArrowRight additionalClassNames="left-[323px] top-[16px]" />
        </div>
        <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] h-[21px] leading-[22px] left-[23px] text-[17px] text-black top-[480px] w-[145px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Quick Insights
        </p>
        <BrandAwareness additionalClassNames="left-[339px]" />
        <Text9 text="end activity" />
      </div>
      <div className="absolute bg-white h-[475px] left-[2346px] overflow-clip rounded-[19px] top-0 w-[348px]" data-name="Recommended Overlay">
        <div className="absolute content-stretch flex flex-col gap-[26px] items-center left-[30px] top-[41px]">
          <div className="content-stretch flex flex-col gap-[34px] items-center relative shrink-0" data-name="content">
            <div className="bg-[#81a9e5] shrink-0 size-[165px]" />
            <div className="content-stretch flex flex-col font-['Poppins:SemiBold',sans-serif] items-center justify-center leading-[normal] not-italic relative shrink-0" data-name="text">
              <p className="relative shrink-0 text-[#333] text-[32.223px] text-center tracking-[-0.6445px] whitespace-nowrap">Tip Name</p>
              <p className="relative shrink-0 text-[#727474] text-[20px] tracking-[-0.4px] w-[213px]">a description about the tip</p>
            </div>
          </div>
          <button className="bg-[#333] block cursor-pointer h-[61px] overflow-clip relative rounded-[20px] shrink-0 w-[287px]" data-name="button">
            <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[calc(50%-39.5px)] not-italic text-[24px] text-left text-white top-[calc(50%-18.5px)] tracking-[-0.48px] whitespace-nowrap">I got it!</p>
          </button>
        </div>
      </div>
      <div className="absolute bg-white h-[475px] left-[3800px] overflow-clip rounded-[19px] top-[47px] w-[348px]" data-name="Volume UI Overlay">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[26px] items-center left-[calc(50%+0.5px)] top-[calc(50%-0.5px)]">
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="content">
            <div className="content-stretch flex flex-col font-['Poppins:SemiBold',sans-serif] items-center justify-center leading-[normal] not-italic relative shrink-0" data-name="text">
              <p className="relative shrink-0 text-[#333] text-[32.223px] text-center tracking-[-0.6445px] whitespace-nowrap">Tap to Listen</p>
              <p className="relative shrink-0 text-[#727474] text-[20px] tracking-[-0.4px] w-[241px]">Here’s a link to hear voiceover cues to help you right now.</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[2px] items-start justify-center relative shrink-0">
            <div className="relative shrink-0 size-[63px]" data-name="motion_play">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 63">
                <g id="motion_play">
                  <mask height="63" id="mask0_1_1650" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="63" x="0" y="0">
                    <rect fill="var(--fill-0, #D9D9D9)" height="63" id="Bounding box" width="63" />
                  </mask>
                  <g mask="url(#mask0_1_1650)">
                    <path d={svgPaths.p5397a00} fill="var(--fill-0, #1C1B1F)" id="motion_play_2" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="h-[63px] relative rounded-[21px] shrink-0 w-[197px]" data-name="image 2">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[21px]">
                <img alt="" className="absolute h-full left-[-26.97%] max-w-none top-0 w-[127.26%]" src={imgImage2} />
              </div>
            </div>
          </div>
          <div className="bg-[#333] h-[61px] overflow-clip relative rounded-[20px] shrink-0 w-[287px]" data-name="button">
            <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[calc(50%-34.5px)] not-italic text-[24px] text-white top-[calc(50%-18.5px)] tracking-[-0.48px] whitespace-nowrap">Done!</p>
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[360px] left-[3800px] overflow-clip rounded-[19px] top-[571px] w-[348px]" data-name="Volume UI Overlay">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[26px] items-center left-[calc(50%+0.5px)] top-[calc(50%-1px)]">
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="content">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="text">
              <p className="font-['Poppins:SemiBold',sans-serif] h-[99px] leading-[normal] not-italic relative shrink-0 text-[#333] text-[32.223px] text-center tracking-[-0.6445px] w-[265px]">Rate the Interaction</p>
            </div>
          </div>
          <div className="h-[46px] relative shrink-0 w-[256px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 256 46">
              <g id="Frame 171">
                <path d={svgPaths.p196b5280} fill="var(--fill-0, #FFCF4C)" id="Star 1" />
                <path d={svgPaths.p1513baf0} fill="var(--fill-0, #FFCF4C)" id="Star 2" />
                <path d={svgPaths.p1c8dec80} fill="var(--fill-0, #FFCF4C)" id="Star 3" />
                <path d={svgPaths.p7bfd680} fill="var(--fill-0, #D9D9D9)" id="Star 4" />
                <path d={svgPaths.p3cf6e280} fill="var(--fill-0, #D9D9D9)" id="Star 5" />
              </g>
            </svg>
          </div>
          <div className="bg-[#333] h-[61px] overflow-clip relative rounded-[20px] shrink-0 w-[287px]" data-name="button">
            <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[calc(50%-46.5px)] not-italic text-[24px] text-white top-[calc(50%-18.5px)] tracking-[-0.48px] whitespace-nowrap">Submit!</p>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[362px] items-center justify-center left-[3232px] top-[180px] w-[132px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[-69.97deg]">
          <div className="h-0 relative w-[385.315px]">
            <div className="absolute inset-[-7.36px_-0.26%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 386.315 14.7279">
                <path d={svgPaths.p1eb509d0} fill="var(--stroke-0, black)" id="Arrow 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[21px] items-center justify-center left-[3685px] top-[96px] w-[159px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[7.52deg]">
          <div className="h-0 relative w-[160.381px]">
            <div className="absolute inset-[-7.36px_-0.62%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161.381 14.7279">
                <path d={svgPaths.p22779fe0} fill="var(--stroke-0, black)" id="Arrow 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[238px] items-center justify-center left-[2204px] top-[405px] w-[218px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[-47.51deg]">
          <div className="h-0 relative w-[322.751px]">
            <div className="absolute inset-[-7.36px_-0.31%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 323.751 14.7279">
                <path d={svgPaths.p1a45cc00} fill="var(--stroke-0, #4D9AFF)" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[54px] items-center justify-center left-[3670px] top-[710px] w-[174px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[-17.24deg]">
          <div className="h-0 relative w-[182.187px]">
            <div className="absolute inset-[-7.36px_-0.55%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183.187 14.7279">
                <path d={svgPaths.p3a2fb500} fill="var(--stroke-0, black)" id="Arrow 5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[80px] items-start left-[554px] p-[80px] rounded-[64px] top-[1784px]" data-name="Style Guide Template">
        <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[48px] text-black w-[min-content]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          Style Guide
        </p>
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
          <Text10 text="Logotype" />
          <div className="h-[245px] relative shrink-0 w-[578px]">
            <div className="absolute bg-[#7fa7b8] h-[245px] left-0 top-0 w-[578px]" />
            <p className="-translate-x-1/2 absolute font-['Raleway:Regular',sans-serif] font-normal h-[55px] leading-[normal] left-1/2 text-[48px] text-center text-white top-[calc(50%-27.5px)] tracking-[6.72px] w-[378px]">ATTUNE</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
          <Text12 text="Typography">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 477 2">
              <path d="M0 1H477" id="Vector 2" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="2" />
            </svg>
          </Text12>
          <div className="content-stretch flex gap-[64px] items-start relative shrink-0">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Style Column">
              <Text11 text="TYPEFACE" additionalClassNames="leading-[0] text-center whitespace-nowrap" />
              <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 text-black whitespace-nowrap" data-name="Typeface">
                <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[32px] text-center">
                  <p className="leading-[46px]">Aa</p>
                </div>
                <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[16px]">
                  <p className="leading-[normal]">Inter</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Typeface">
                <div className="flex flex-col font-['Raleway:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-black text-center whitespace-nowrap">
                  <p className="leading-[40px]">Aa</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Typeface">
                <div className="flex flex-col font-['Raleway:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-black text-center whitespace-nowrap">
                  <p className="leading-[40px]">Aa</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-black text-center whitespace-nowrap" data-name="Typeface">
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px]">
                  <p className="leading-[40px]">Aa</p>
                </div>
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px]">
                  <p className="leading-[24px]">Aa</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] relative shrink-0 text-center whitespace-nowrap" data-name="Style Column">
              <Text11 text="FONTS" />
              <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[32px] text-black">
                <p className="leading-[46px]">H1 - Raleway Bold (32)</p>
              </div>
              <div className="flex flex-col font-['Raleway:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black">
                <p className="leading-[40px]">H2 - Raleway Semi Bold (24)</p>
              </div>
              <div className="flex flex-col font-['Raleway:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[18px] text-black">
                <p className="leading-[40px]">H3 - Inter Semi Bold (18)</p>
              </div>
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[16px] text-black">
                <p className="leading-[40px]">Subtitle - Inter Semi Bold (18)</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[14px] text-black">
                <p className="leading-[24px]">Body - Inter Regular (14)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
          <Text10 text="Color" />
          <div className="content-stretch flex items-start relative shrink-0">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Style Column">
              <Text11 text="PRIMARY" additionalClassNames="leading-[0] text-center whitespace-nowrap" />
              <div className="content-stretch flex gap-[26px] items-start relative shrink-0" data-name="Color Row">
                <div className="bg-[#7fa7b8] shrink-0 size-[100px]" />
                <div className="bg-[#9fbfa8] shrink-0 size-[100px]" />
                <div className="bg-[#f6f8f7] shrink-0 size-[100px]" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start relative shrink-0">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Style Column">
              <Text11 text="SECONDARY" additionalClassNames="leading-[0] text-center whitespace-nowrap" />
              <div className="content-stretch flex gap-[26px] items-start relative shrink-0" data-name="Color Row">
                <div className="bg-[#e9f1ef] shrink-0 size-[100px]" />
                <div className="bg-[#2e3a3f] shrink-0 size-[100px]" />
                <div className="bg-[#6b7c80] shrink-0 size-[100px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] h-[282px] items-start relative shrink-0 w-full">
          <Text10 text="Iconography" />
          <div className="content-stretch flex gap-[43px] items-start relative shrink-0">
            <Text6 text="Home" />
            <Text7 text="Heat" />
            <Text4 text="Activity" />
            <Text5 text="John" />
          </div>
          <div className="h-[245px] relative shrink-0 w-[578px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Rectangle 10" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[80px] items-start left-[1398px] p-[80px] rounded-[64px] top-[1784px] w-[738px]" data-name="Style Guide Template">
        <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[48px] text-black w-full" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          Components
        </p>
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
          <Text10 text="Buttons" />
          <div className="h-[245px] relative shrink-0 w-[578px]">
            <div className="absolute bg-white border border-black border-solid h-[245px] left-0 top-0 w-[578px]" />
            <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#2e3a3f] left-1/2 rounded-[20px] shadow-[6px_2px_4px_0px_rgba(0,0,0,0.12)] top-[calc(50%-67px)]">
              <div className="flex flex-row items-center justify-center size-full">
                <Text text="primary button" additionalClassNames="px-[38px]" />
              </div>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#9fbfa8] left-1/2 rounded-[20px] top-[calc(50%+36px)]">
              <div aria-hidden="true" className="absolute border border-[#7fa7b8] border-solid inset-0 pointer-events-none rounded-[20px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <Text text="secondary button" additionalClassNames="px-[20px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full">
          <Text10 text="Input" />
          <div className="h-[95px] overflow-clip relative shrink-0 w-[300px]" data-name="OB Forms/Name of Activity">
            <div className="absolute flex flex-col font-['Raleway:SemiBold',sans-serif] font-semibold inset-[1.19%_0_65.48%_0] justify-center leading-[0] text-[18px] text-black">
              <p className="leading-[40px]">Name of Activity</p>
            </div>
            <div className="absolute bg-white left-0 right-0 rounded-[5px] top-[28px]" data-name="Frame">
              <div className="content-stretch flex flex-col items-start overflow-clip px-[15px] py-[10px] relative rounded-[inherit] w-full">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] not-italic relative shrink-0 text-[#d2d2d2] text-[16px] whitespace-nowrap">Name of Activity</p>
              </div>
              <div aria-hidden="true" className="absolute border border-[#d8e1e3] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
          <Text10 text="Check Box" />
          <ObFormsIntentionText text="Discussion" />
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
          <Text10 text="Cards" />
          <div className="h-[245px] relative shrink-0 w-[578px]">
            <div className="absolute bg-[#9fbfa8] inset-0 rounded-[20px] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.08)]" />
          </div>
        </div>
      </div>
      <div className="absolute left-0 size-[400px] top-[1813px]" data-name="Heatmap Color Palette">
        <div className="absolute left-0 size-[400px] top-0" data-name="Color Hunt Palette ff8080ffcf96f6fdc3cdfad5 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgColorHuntPaletteFf8080Ffcf96F6Fdc3Cdfad51} />
        </div>
      </div>
    </div>
  );
}