export default function RecommendedOverlay() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip px-[16px] py-[41px] relative rounded-[19px] size-full" data-name="Recommended Overlay">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-between min-h-px min-w-px relative w-full">
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#333] text-[32.223px] text-center tracking-[-0.6445px] whitespace-nowrap">Settings</p>
        <div className="content-stretch flex flex-col gap-[34px] items-center relative shrink-0" data-name="content">
          <div className="content-stretch flex flex-col items-center relative shrink-0">
            <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[20px] text-black tracking-[-0.4px] w-[min-content]">Range</p>
            <div className="h-[37px] relative shrink-0 w-[302px]" data-name="Standard slider">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[6px] items-center relative size-full">
                  <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Active track">
                    <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                        <div className="bg-[#7fa7b8] flex-[1_0_0] min-h-px min-w-px rounded-bl-[16px] rounded-br-[2px] rounded-tl-[16px] rounded-tr-[2px] w-full" data-name="Track" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#7fa7b8] h-[44px] overflow-clip rounded-[2px] shrink-0 w-[4px]" data-name="Handle" />
                  <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Inactive track">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-between relative size-full">
                        <div className="bg-[rgba(120,120,120,0.2)] flex-[1_0_0] h-full min-h-px min-w-px rounded-bl-[2px] rounded-br-[16px] rounded-tl-[2px] rounded-tr-[16px]" data-name="Track" />
                        <div className="-translate-y-1/2 absolute right-[4px] size-[4px] top-1/2" data-name=".Building Blocks/Track stop">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                            <circle cx="2" cy="2" fill="var(--fill-0, #4A4459)" id="Dot" r="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
            <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-[min-content]">Allow ATTUNE to record conversations</p>
            <button className="block cursor-pointer h-[28px] relative shrink-0 w-[300px]" data-name="OB Forms/Intention">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0_0.33%_0_11%] leading-[24px] not-italic text-[14px] text-black text-left">Agree</p>
              <div className="absolute border border-[#e2e1e5] border-solid bottom-1/4 left-[1.33%] right-[93.67%] rounded-[5px] top-[21.43%]" data-name="Rectangle" role="button" tabIndex="0" />
            </button>
          </div>
        </div>
        <button className="bg-[#333] content-stretch cursor-pointer flex items-center justify-center overflow-clip px-[27px] py-[12px] relative rounded-[20px] shrink-0" data-name="button">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-left text-white tracking-[-0.48px] whitespace-nowrap">Save and Exit</p>
        </button>
      </div>
    </div>
  );
}