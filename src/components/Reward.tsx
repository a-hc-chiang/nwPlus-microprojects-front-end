import { useState } from 'react';

interface RewardProps {
  onClose: () => void;
}

const FLOWER_TYPES = ['🌸', '🌺', '🌻', '🌷', '🌹', '🪷'];

export default function Reward({ onClose }: RewardProps) {
  const [revealedRewards, setRevealedRewards] = useState<(string | null)[]>([null, null, null]);

  const handleReveal = (index: number) => {
    if (revealedRewards[index] === null) {
      const newRewards = [...revealedRewards];
      newRewards[index] = FLOWER_TYPES[Math.floor(Math.random() * FLOWER_TYPES.length)];
      setRevealedRewards(newRewards);
    }
  };

  const allRevealed = revealedRewards.every(r => r !== null);

  return (
    <div className="bg-[#cdffc0] relative size-full">
      {/* Blurred Background Timer */}
      <div className="absolute blur-[5px] content-stretch filter flex flex-col gap-[8px] items-center justify-center left-[calc(50%-0.5px)] top-[calc(50%-0.03px)] translate-x-[-50%] translate-y-[-50%]">
        <div className="content-stretch flex gap-[13.562px] h-[83px] items-center leading-[0] relative shrink-0">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1] bg-[#277645] border-[#bbffd4] border-[2.543px] border-solid h-[56px] ml-0 mt-0 rounded-[84.762px] w-[260px]" />
            <p className="[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[129.5px] mt-[10px] relative text-[#bbffd4] text-[27.124px] text-center text-nowrap translate-x-[-50%]">Start studying</p>
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1] bg-[#bbffd4] border-[#277645] border-[2.543px] border-solid h-[56px] ml-0 mt-0 rounded-[84.762px] w-[219.438px]" />
            <p className="[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[108.94px] mt-[10px] relative text-[#277645] text-[27.124px] text-center translate-x-[-50%] w-[151px]">Start break</p>
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1] bg-[#bbffd4] border-[#277645] border-[2.543px] border-solid h-[56px] ml-0 mt-0 rounded-[84.762px] w-[268.89px]" />
            <p className="[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[134.38px] mt-[10px] relative text-[#277645] text-[27.124px] text-center translate-x-[-50%] w-[239.013px]">See your garden</p>
          </div>
        </div>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#277645] text-[256px] text-nowrap">1:00:00</p>
        <div className="content-stretch flex gap-[13.562px] items-center leading-[0] relative shrink-0">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1] bg-[#bbffd4] border-[#277645] border-[2.543px] border-solid h-[55.943px] ml-0 mt-0 rounded-[84.762px] w-[171.219px]" />
            <p className="[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[86.12px] mt-[10.17px] relative text-[#277645] text-[27.124px] text-center text-nowrap translate-x-[-50%]">Pause</p>
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1] bg-[#bbffd4] border-[#277645] border-[2.543px] border-solid h-[55.943px] ml-0 mt-0 rounded-[84.762px] w-[171.219px]" />
            <p className="[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[85.81px] mt-[10.17px] relative text-[#277645] text-[27.124px] text-center text-nowrap translate-x-[-50%]">Reset</p>
          </div>
        </div>
      </div>

      {/* Reward Modal */}
      <div className="absolute contents left-[430px] top-[251px]">
        <div className="absolute bg-[#bbffd4] border-4 border-[#277645] border-solid h-[605px] left-1/2 rounded-[36px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[calc(50%+13.5px)] translate-x-[-50%] translate-y-[-50%] w-[1060px]" />
        
        <div className="absolute content-stretch flex flex-col gap-[56px] items-center justify-center left-[517px] top-[388px]">
          <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#277645] text-[48px] text-center w-[min-content]">
            Time for a reward!
          </p>
          
          <div className="content-stretch flex gap-[76px] items-center justify-center leading-[0] relative shrink-0 w-[885px]">
            {revealedRewards.map((reward, index) => (
              <button
                key={index}
                onClick={() => handleReveal(index)}
                className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 transition-transform hover:scale-110 active:scale-95 cursor-pointer"
              >
                <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[215px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 215 215">
                    <circle 
                      cx="107.5" 
                      cy="107.5" 
                      fill={reward ? "#277645" : "#CDFFC0"} 
                      r="106" 
                      stroke="#277645" 
                      strokeWidth="3" 
                    />
                  </svg>
                </div>
                <p className="[grid-area:1_/_1] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] ml-[107.5px] mt-[55px] relative text-[#277645] text-[138.378px] text-nowrap translate-x-[-50%]">
                  {reward || '?'}
                </p>
              </button>
            ))}
          </div>

          {allRevealed && (
            <button
              onClick={onClose}
              className="mt-4 transition-transform hover:scale-105 active:scale-95"
            >
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative">
                <div className="[grid-area:1_/_1] bg-[#277645] border-[#bbffd4] border-[2.543px] border-solid h-[56px] ml-0 mt-0 rounded-[84.762px] w-[260px]" />
                <p className="[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[130px] mt-[10px] relative text-[#bbffd4] text-[27.124px] text-center text-nowrap translate-x-[-50%]">
                  Continue
                </p>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
