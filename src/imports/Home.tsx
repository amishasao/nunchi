import clsx from "clsx";
import svgPaths from "./svg-idkvdsa4gp";
import imgImage3 from "figma:asset/c97a5c891d3019a1ba179d80e42e4b692f5803af.png";
import { imgKeyboardDoubleArrowRight } from "./svg-hzuwd";

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[33px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ additionalClassNames = "" }: BackgroundImage3Props) {
  return (
    <div className={clsx("absolute flex items-center justify-center size-[28px] top-0", additionalClassNames)}>
      <div className="-scale-y-100 flex-none">
        <div className="bg-[#d1e0ff] rounded-[4px] size-[28px]" data-name="Data Cell" />
      </div>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ additionalClassNames = "" }: BackgroundImage2Props) {
  return (
    <div className={clsx("absolute flex items-center justify-center size-[28px] top-0", additionalClassNames)}>
      <div className="-scale-y-100 flex-none">
        <div className="bg-[#528bff] rounded-[4px] size-[28px]" data-name="Data Cell" />
      </div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ additionalClassNames = "" }: BackgroundImage1Props) {
  return (
    <div className={clsx("absolute flex items-center justify-center size-[28px] top-0", additionalClassNames)}>
      <div className="-scale-y-100 flex-none">
        <div className="bg-[#00359e] rounded-[4px] size-[28px]" data-name="Data Cell" />
      </div>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ additionalClassNames = "" }: BackgroundImageProps) {
  return (
    <div className={clsx("absolute h-[28px] left-[52px] w-[263px]", additionalClassNames)}>
      <BackgroundImage1 additionalClassNames="left-0" />
      <BackgroundImage2 additionalClassNames="left-[39px]" />
      <BackgroundImage1 additionalClassNames="left-[78px]" />
      <BackgroundImage2 additionalClassNames="left-[117px]" />
      <BackgroundImage3 additionalClassNames="left-[156px]" />
      <BackgroundImage2 additionalClassNames="left-[195px]" />
      <BackgroundImage2 additionalClassNames="left-[234px]" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white relative size-full" data-name="Home">
      <div className="absolute left-0 top-0 w-[402px]" data-name="Status bar - iPhone">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[24px] relative w-full">
            <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[1.5px] relative" data-name="Time">
              <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                {"9:41"}
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
      <div className="absolute content-stretch flex flex-col gap-[44px] items-center left-[-22px] top-[73px] w-[446px]">
        <div className="content-start flex flex-wrap gap-[6px_116px] items-start relative shrink-0 w-[358px]">
          <div className="bg-white h-[24px] overflow-clip relative shrink-0 w-[205px]">
            <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[22px] leading-[24px] left-[9px] not-italic text-[14px] text-black top-px w-[208px]">Next Interaction: Today at 3 pm</p>
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
            <div className="absolute h-[239px] left-0 top-[-50px] w-[358px]" data-name="image 3">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
            </div>
            <p className="absolute font-['Raleway:Bold',sans-serif] font-bold h-[32px] leading-[46px] left-[10px] text-[#f6f8f7] text-[32px] top-[calc(50%+8px)] w-[255px]">Welcome John</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[358px]">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[27px] leading-[22px] relative shrink-0 text-[17px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Insights
          </p>
          <div className="bg-white h-[214px] overflow-clip relative shrink-0 w-full">
            <div className="absolute h-[28px] left-[16px] top-[86px] w-[326px]" />
            <div className="absolute h-[195px] left-[32px] top-[8px] w-[326px]">
              <div className="absolute h-[28px] left-0 top-[121px] w-[326px]" />
              <BackgroundImage additionalClassNames="top-[10px]" />
              <div className="absolute h-[28px] left-[52px] top-[52px] w-[263px]">
                <BackgroundImage1 additionalClassNames="left-0" />
                <BackgroundImage2 additionalClassNames="left-[39px]" />
                <BackgroundImage1 additionalClassNames="left-[78px]" />
                <BackgroundImage2 additionalClassNames="left-[117px]" />
                <BackgroundImage3 additionalClassNames="left-[156px]" />
                <BackgroundImage2 additionalClassNames="left-[195px]" />
                <BackgroundImage2 additionalClassNames="left-[234px]" />
                <div className="absolute h-[28px] left-0 top-[42px] w-[263px]">
                  <BackgroundImage1 additionalClassNames="left-0" />
                  <BackgroundImage1 additionalClassNames="left-[39px]" />
                  <BackgroundImage1 additionalClassNames="left-[78px]" />
                  <BackgroundImage3 additionalClassNames="left-[117px]" />
                  <BackgroundImage3 additionalClassNames="left-[156px]" />
                  <BackgroundImage2 additionalClassNames="left-[195px]" />
                  <BackgroundImage3 additionalClassNames="left-[234px]" />
                </div>
              </div>
              <BackgroundImage additionalClassNames="top-[135px]" />
            </div>
            <div className="absolute content-stretch flex font-['Raleway:SemiBold',sans-serif] font-semibold gap-[14px] items-center leading-[40px] left-[85px] text-[18px] text-black text-center top-[170px]">
              <p className="h-[22px] relative shrink-0 w-[25px]">S</p>
              <p className="h-[22px] relative shrink-0 w-[25px]">M</p>
              <p className="h-[22px] relative shrink-0 w-[25px]">T</p>
              <p className="h-[22px] relative shrink-0 w-[25px]">W</p>
              <p className="h-[22px] relative shrink-0 w-[25px]">T</p>
              <p className="h-[22px] relative shrink-0 w-[25px]">F</p>
              <p className="h-[22px] relative shrink-0 w-[25px]">S</p>
            </div>
            <div className="absolute content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[20px] items-center leading-[24px] left-0 not-italic text-[14px] text-black text-center top-[18px] w-[84px]">
              <p className="h-[23px] relative shrink-0 w-full">calm</p>
              <p className="h-[23px] relative shrink-0 w-full">focused</p>
              <p className="h-[23px] relative shrink-0 w-full">confident</p>
              <p className="h-[23px] relative shrink-0 w-full">intentional</p>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[9px] items-start px-[54px] relative w-full">
            <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[27px] leading-[22px] relative shrink-0 text-[17px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              Recommended
            </p>
            <div className="content-stretch flex gap-[25px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[132px]">
                <div className="bg-[#81a9e5] h-[132px] rounded-[8px] shrink-0 w-full" />
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[41px] leading-[22px] relative shrink-0 text-[17px] text-black text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Instilling Trust
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[132px]">
                <div className="bg-[#81a9e5] h-[132px] rounded-[8px] shrink-0 w-full" />
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[41px] leading-[22px] relative shrink-0 text-[17px] text-black text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Finding Intent
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[132px]">
                <div className="h-[132px] overflow-clip relative rounded-[8px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(88.2537deg, rgb(129, 169, 229) 3.9963%, rgb(161, 176, 199) 64.336%)" }}>
                  <div className="absolute contents left-[27px] top-[54px]" data-name="keyboard_double_arrow_right">
                    <div className="absolute inset-[45.78%_65.47%_45.77%_24.55%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.412px_-6.425px] mask-size-[24px_24px]" data-name="keyboard_double_arrow_right" style={{ maskImage: `url('${imgKeyboardDoubleArrowRight}')` }}>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.163 11.163">
                        <path d={svgPaths.p3019f900} fill="var(--fill-0, black)" id="keyboard_double_arrow_right" />
                      </svg>
                    </div>
                  </div>
                </div>
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
          <BackgroundImage4>
            <g id="home">
              <mask height="33" id="mask0_1_1670" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="33" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="33" id="Bounding box" width="33" />
              </mask>
              <g mask="url(#mask0_1_1670)">
                <path d={svgPaths.p245c0000} fill="var(--fill-0, black)" id="home_2" />
              </g>
            </g>
          </BackgroundImage4>
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[12px] leading-[22px] relative shrink-0 text-[15px] text-black text-center w-[55px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Home
          </p>
        </div>
        <div className="content-stretch flex flex-col items-center relative shrink-0">
          <BackgroundImage4>
            <g id="local_fire_department">
              <mask height="33" id="mask0_1_1694" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="33" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="33" id="Bounding box" width="33" />
              </mask>
              <g mask="url(#mask0_1_1694)">
                <path d={svgPaths.pe398c80} fill="var(--fill-0, #767676)" id="local_fire_department_2" />
              </g>
            </g>
          </BackgroundImage4>
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[12px] leading-[22px] relative shrink-0 text-[#767676] text-[15px] text-center w-[51px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Heatmap
          </p>
        </div>
        <div className="content-stretch flex flex-col items-center relative shrink-0">
          <BackgroundImage4>
            <g id="filter_vintage">
              <mask height="33" id="mask0_1_1676" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="33" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="33" id="Bounding box" width="33" />
              </mask>
              <g mask="url(#mask0_1_1676)">
                <path d={svgPaths.pf6b9b80} fill="var(--fill-0, #767676)" id="filter_vintage_2" />
              </g>
            </g>
          </BackgroundImage4>
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[12px] leading-[22px] relative shrink-0 text-[#767676] text-[15px] text-center w-[65px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Activity
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[27px]" data-name="person">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
              <path d={svgPaths.p27132f00} fill="var(--fill-0, #767676)" id="person" />
            </svg>
          </div>
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[22px] leading-[22px] relative shrink-0 text-[#767676] text-[15px] text-center w-[48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            John
          </p>
        </div>
      </div>
    </div>
  );
}