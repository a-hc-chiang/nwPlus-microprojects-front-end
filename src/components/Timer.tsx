import { useState, useEffect } from 'react';

interface TimerProps {
  onComplete: () => void;
  onNavigateToGarden: () => void;
}

export default function Timer({ onComplete, onNavigateToGarden }: TimerProps) {
  const [selectedDuration, setSelectedDuration] = useState<number>(60);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && !isPaused && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsPaused(false);
            onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isRunning, isPaused, timeRemaining, onComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartStudying = () => {
    setTimeRemaining(selectedDuration * 60);
    setIsRunning(true);
    setIsPaused(false);
  };

  const handleStartBreak = () => {
    setTimeRemaining(5 * 60); // 5 minute break
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTimeRemaining(0);
  };

  return (
    <div className="bg-[#cdffc0] relative size-full">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-[calc(50%-0.5px)] top-[calc(50%-0.03px)] translate-x-[-50%] translate-y-[-50%]">
        {/* Duration Selection and Action Buttons */}
        <div className="content-stretch flex gap-[13.562px] h-[83px] items-center leading-[0] relative shrink-0">
          {/* Start Studying Button */}
          <button 
            onClick={handleStartStudying}
            disabled={isRunning}
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 disabled:opacity-50 transition-opacity hover:opacity-80"
          >
            <div className="[grid-area:1_/_1] bg-[#277645] border-[#bbffd4] border-[2.543px] border-solid h-[56px] ml-0 mt-0 rounded-[84.762px] w-[260px]" />
            <p className="[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[129.5px] mt-[10px] relative text-[#bbffd4] text-[27.124px] text-center text-nowrap translate-x-[-50%]">
              Start studying
            </p>
          </button>

          {/* 60 mins */}
          <button 
            onClick={() => setSelectedDuration(60)}
            disabled={isRunning}
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 disabled:opacity-50 transition-all hover:scale-105"
          >
            <div className={`[grid-area:1_/_1] border-[2.543px] border-solid h-[56px] ml-0 mt-0 rounded-[84.762px] w-[219.438px] ${
              selectedDuration === 60 ? 'bg-[#277645] border-[#bbffd4]' : 'bg-[#bbffd4] border-[#277645]'
            }`} />
            <p className={`[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[108.94px] mt-[10px] relative text-[27.124px] text-center translate-x-[-50%] w-[151px] ${
              selectedDuration === 60 ? 'text-[#bbffd4]' : 'text-[#277645]'
            }`}>
              60 mins
            </p>
          </button>

          {/* 45 mins */}
          <button 
            onClick={() => setSelectedDuration(45)}
            disabled={isRunning}
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 disabled:opacity-50 transition-all hover:scale-105"
          >
            <div className={`[grid-area:1_/_1] border-[2.543px] border-solid h-[56px] ml-0 mt-0 rounded-[84.762px] w-[219.438px] ${
              selectedDuration === 45 ? 'bg-[#277645] border-[#bbffd4]' : 'bg-[#bbffd4] border-[#277645]'
            }`} />
            <p className={`[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[108.94px] mt-[10px] relative text-[27.124px] text-center translate-x-[-50%] w-[151px] ${
              selectedDuration === 45 ? 'text-[#bbffd4]' : 'text-[#277645]'
            }`}>
              45 mins
            </p>
          </button>

          {/* 30 mins */}
          <button 
            onClick={() => setSelectedDuration(30)}
            disabled={isRunning}
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 disabled:opacity-50 transition-all hover:scale-105"
          >
            <div className={`[grid-area:1_/_1] border-[2.543px] border-solid h-[56px] ml-0 mt-0 rounded-[84.762px] w-[219.438px] ${
              selectedDuration === 30 ? 'bg-[#277645] border-[#bbffd4]' : 'bg-[#bbffd4] border-[#277645]'
            }`} />
            <p className={`[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[108.94px] mt-[10px] relative text-[27.124px] text-center translate-x-[-50%] w-[151px] ${
              selectedDuration === 30 ? 'text-[#bbffd4]' : 'text-[#277645]'
            }`}>
              30 mins
            </p>
          </button>
        </div>

        {/* Start Break and See Garden Buttons */}
        <div className="content-stretch flex gap-[14px] items-center leading-[0] relative shrink-0">
          <button 
            onClick={handleStartBreak}
            disabled={isRunning}
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 disabled:opacity-50 transition-opacity hover:opacity-80"
          >
            <div className="[grid-area:1_/_1] bg-[#bbffd4] border-[#277645] border-[2.543px] border-solid h-[56px] ml-0 mt-0 rounded-[84.762px] w-[219.438px]" />
            <p className="[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[108.94px] mt-[10px] relative text-[#277645] text-[27.124px] text-center translate-x-[-50%] w-[151px]">
              Start break
            </p>
          </button>

          <button 
            onClick={onNavigateToGarden}
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 transition-opacity hover:opacity-80"
          >
            <div className="[grid-area:1_/_1] bg-[#bbffd4] border-[#277645] border-[2.543px] border-solid h-[56px] ml-0 mt-0 rounded-[84.762px] w-[268.89px]" />
            <p className="[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[134.38px] mt-[10px] relative text-[#277645] text-[27.124px] text-center translate-x-[-50%] w-[239.013px]">
              See your garden
            </p>
          </button>
        </div>

        {/* Timer Display */}
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#277645] text-[256px] text-nowrap">
          {isRunning ? formatTime(timeRemaining) : `${selectedDuration.toString().padStart(2, '0')}:00`}
        </p>

        {/* Pause and Reset Buttons */}
        <div className="content-stretch flex gap-[13.562px] items-center leading-[0] relative shrink-0">
          <button 
            onClick={handlePause}
            disabled={!isRunning}
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 disabled:opacity-50 transition-opacity hover:opacity-80"
          >
            <div className="[grid-area:1_/_1] bg-[#bbffd4] border-[#277645] border-[2.543px] border-solid h-[55.943px] ml-0 mt-0 rounded-[84.762px] w-[171.219px]" />
            <p className="[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[86.12px] mt-[10.17px] relative text-[#277645] text-[27.124px] text-center text-nowrap translate-x-[-50%]">
              {isPaused ? 'Resume' : 'Pause'}
            </p>
          </button>

          <button 
            onClick={handleReset}
            disabled={!isRunning && timeRemaining === 0}
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 disabled:opacity-50 transition-opacity hover:opacity-80"
          >
            <div className="[grid-area:1_/_1] bg-[#bbffd4] border-[#277645] border-[2.543px] border-solid h-[55.943px] ml-0 mt-0 rounded-[84.762px] w-[171.219px]" />
            <p className="[grid-area:1_/_1] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] ml-[85.81px] mt-[10.17px] relative text-[#277645] text-[27.124px] text-center text-nowrap translate-x-[-50%]">
              Reset
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
