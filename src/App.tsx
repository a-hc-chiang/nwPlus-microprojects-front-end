import { useState } from 'react';
import Timer from './components/Timer';
import Reward from './components/Reward';
import Garden from './components/Garden';

type Page = 'timer' | 'reward' | 'garden';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('timer');

  const handleTimerComplete = () => {
    setCurrentPage('reward');
  };

  const handleRewardClose = () => {
    setCurrentPage('timer');
  };

  const handleNavigateToGarden = () => {
    setCurrentPage('garden');
  };

  const handleBackToTimer = () => {
    setCurrentPage('timer');
  };

  return (
    <div className="size-full">
      {currentPage === 'timer' && (
        <Timer 
          onComplete={handleTimerComplete}
          onNavigateToGarden={handleNavigateToGarden}
        />
      )}
      {currentPage === 'reward' && (
        <Reward onClose={handleRewardClose} />
      )}
      {currentPage === 'garden' && (
        <Garden onBackToTimer={handleBackToTimer} />
      )}
    </div>
  );
}
