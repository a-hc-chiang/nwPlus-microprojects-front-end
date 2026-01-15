import svgPaths from "../imports/svg-bw5uzw2as5";

interface GardenProps {
  onBackToTimer: () => void;
}

export default function Garden({ onBackToTimer }: GardenProps) {
  return (
    <div className="bg-[#cdffc0] relative size-full">
      <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
        {/* Buttons */}
        <div className="content-stretch flex gap-[40px] items-start relative shrink-0">
          <div className="content-stretch flex items-start relative shrink-0 w-[288px]">
            <button 
              onClick={onBackToTimer}
              className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 transition-transform hover:scale-105 active:scale-95"
            >
              <div className="[grid-area:1_/_1] bg-[#bbffd4] border-[#277645] border-[2.543px] border-solid h-[56px] ml-0 mt-0 rounded-[84.762px] w-[288px]" />
              <p className="[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[143.93px] mt-[10px] relative text-[#277645] text-[27.124px] text-center translate-x-[-50%] w-[256px]">
                Go Back to Timer
              </p>
            </button>
          </div>

          <div className="content-stretch flex items-start relative shrink-0 w-[264px]">
            <button className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 transition-transform hover:scale-105 active:scale-95">
              <div className="[grid-area:1_/_1] bg-[#bbffd4] border-[#277645] border-[2.543px] border-solid h-[56px] ml-0 mt-0 rounded-[84.762px] w-[268.89px]" />
              <p className="[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[134.38px] mt-[10px] relative text-[#277645] text-[27.124px] text-center translate-x-[-50%] w-[239.013px]">
                Filter garden
              </p>
            </button>
          </div>
        </div>

        {/* Flower Rows */}
        <div className="h-[155px] relative shrink-0 w-[1240px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1240 155">
            <g id="Frame 894">
              <path clipRule="evenodd" d={svgPaths.p2711e400} fill="#EB5757" fillRule="evenodd" id="Flower" />
              <path clipRule="evenodd" d={svgPaths.p28ec400} fill="#EB5757" fillRule="evenodd" id="Flower_2" />
              <path clipRule="evenodd" d={svgPaths.p23dadb00} fill="#EB5757" fillRule="evenodd" id="Flower_3" />
              <path clipRule="evenodd" d={svgPaths.p2e761700} fill="#EB5757" fillRule="evenodd" id="Flower_4" />
              <path clipRule="evenodd" d={svgPaths.p3d0fa500} fill="#EB5757" fillRule="evenodd" id="Flower_5" />
              <path clipRule="evenodd" d={svgPaths.p2357d900} fill="#EB5757" fillRule="evenodd" id="Flower_6" />
            </g>
          </svg>
        </div>

        <div className="h-[155px] relative shrink-0 w-[1240px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1240 155">
            <g id="Frame 894">
              <path clipRule="evenodd" d={svgPaths.p2711e400} fill="#EB5757" fillRule="evenodd" id="Flower" />
              <path clipRule="evenodd" d={svgPaths.p28ec400} fill="#EB5757" fillRule="evenodd" id="Flower_2" />
              <path clipRule="evenodd" d={svgPaths.p23dadb00} fill="#EB5757" fillRule="evenodd" id="Flower_3" />
              <path clipRule="evenodd" d={svgPaths.p2e761700} fill="#EB5757" fillRule="evenodd" id="Flower_4" />
              <path clipRule="evenodd" d={svgPaths.p3d0fa500} fill="#EB5757" fillRule="evenodd" id="Flower_5" />
              <path clipRule="evenodd" d={svgPaths.p2357d900} fill="#EB5757" fillRule="evenodd" id="Flower_6" />
            </g>
          </svg>
        </div>

        <div className="h-[155px] relative shrink-0 w-[1240px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1240 155">
            <g id="Frame 894">
              <path clipRule="evenodd" d={svgPaths.p2711e400} fill="#EB5757" fillRule="evenodd" id="Flower" />
              <path clipRule="evenodd" d={svgPaths.p28ec400} fill="#EB5757" fillRule="evenodd" id="Flower_2" />
              <path clipRule="evenodd" d={svgPaths.p23dadb00} fill="#EB5757" fillRule="evenodd" id="Flower_3" />
              <path clipRule="evenodd" d={svgPaths.p2e761700} fill="#EB5757" fillRule="evenodd" id="Flower_4" />
              <path clipRule="evenodd" d={svgPaths.p3d0fa500} fill="#EB5757" fillRule="evenodd" id="Flower_5" />
              <path clipRule="evenodd" d={svgPaths.p2357d900} fill="#EB5757" fillRule="evenodd" id="Flower_6" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
