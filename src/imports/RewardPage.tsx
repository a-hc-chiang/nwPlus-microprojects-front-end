function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#277645] border-[#bbffd4] border-[2.543px] border-solid h-[56px] ml-0 mt-0 rounded-[84.762px] w-[260px]" />
      <p className="[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[129.5px] mt-[10px] relative text-[#bbffd4] text-[27.124px] text-center text-nowrap translate-x-[-50%]">Start studying</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#bbffd4] border-[#277645] border-[2.543px] border-solid h-[56px] ml-0 mt-0 rounded-[84.762px] w-[219.438px]" />
      <p className="[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[108.94px] mt-[10px] relative text-[#277645] text-[27.124px] text-center translate-x-[-50%] w-[151px]">Start break</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#bbffd4] border-[#277645] border-[2.543px] border-solid h-[56px] ml-0 mt-0 rounded-[84.762px] w-[268.89px]" />
      <p className="[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[134.38px] mt-[10px] relative text-[#277645] text-[27.124px] text-center translate-x-[-50%] w-[239.013px]">See your garden</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[13.562px] h-[83px] items-center leading-[0] relative shrink-0">
      <Group />
      <Group1 />
      <Group3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#bbffd4] border-[#277645] border-[2.543px] border-solid h-[55.943px] ml-0 mt-0 rounded-[84.762px] w-[171.219px]" />
      <p className="[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[86.12px] mt-[10.17px] relative text-[#277645] text-[27.124px] text-center text-nowrap translate-x-[-50%]">Pause</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#bbffd4] border-[#277645] border-[2.543px] border-solid h-[55.943px] ml-0 mt-0 rounded-[84.762px] w-[171.219px]" />
      <p className="[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[85.81px] mt-[10.17px] relative text-[#277645] text-[27.124px] text-center text-nowrap translate-x-[-50%]">Reset</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[13.562px] items-center leading-[0] relative shrink-0">
      <Group4 />
      <Group5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute blur-[5px] content-stretch filter flex flex-col gap-[8px] items-center justify-center left-[calc(50%-0.5px)] top-[calc(50%-0.03px)] translate-x-[-50%] translate-y-[-50%]">
      <Frame2 />
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#277645] text-[256px] text-nowrap">1:00:00</p>
      <Frame1 />
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[215px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 215 215">
          <circle cx="107.5" cy="107.5" fill="var(--fill-0, #CDFFC0)" id="Ellipse 9" r="106" stroke="var(--stroke-0, #277645)" strokeWidth="3" />
        </svg>
      </div>
      <p className="[grid-area:1_/_1] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] ml-[67px] mt-[19px] relative text-[#277645] text-[138.378px] text-nowrap">?</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[215px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 215 215">
          <circle cx="107.5" cy="107.5" fill="var(--fill-0, #CDFFC0)" id="Ellipse 9" r="106" stroke="var(--stroke-0, #277645)" strokeWidth="3" />
        </svg>
      </div>
      <p className="[grid-area:1_/_1] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] ml-[67px] mt-[19px] relative text-[#277645] text-[138.378px] text-nowrap">?</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[215px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 215 215">
          <circle cx="107.5" cy="107.5" fill="var(--fill-0, #CDFFC0)" id="Ellipse 9" r="106" stroke="var(--stroke-0, #277645)" strokeWidth="3" />
        </svg>
      </div>
      <p className="[grid-area:1_/_1] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] ml-[67px] mt-[19px] relative text-[#277645] text-[138.378px] text-nowrap">?</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[76px] items-center justify-center leading-[0] relative shrink-0 w-[885px]">
      <Group7 />
      <Group8 />
      <Group6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[56px] items-center justify-center left-[517px] top-[388px]">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#277645] text-[48px] text-center w-[min-content]">Time for a reward!</p>
      <Frame3 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[430px] top-[251px]">
      <div className="absolute bg-[#bbffd4] border-4 border-[#277645] border-solid h-[605px] left-1/2 rounded-[36px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[calc(50%+13.5px)] translate-x-[-50%] translate-y-[-50%] w-[1060px]" />
      <Frame4 />
    </div>
  );
}

export default function RewardPage() {
  return (
    <div className="bg-[#cdffc0] relative size-full" data-name="Reward Page">
      <Frame />
      <Group9 />
    </div>
  );
}