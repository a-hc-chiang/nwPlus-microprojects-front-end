import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { completeFocus } from './api/rewards';
import { GardenPage } from './components/GardenPage';
import { Plant, RewardModal } from './components/RewardModal';
import { TimerPage } from './components/TimerPage';
import { usePomodoro } from './hooks/usePomodoro';

export default function App() {
	const navigate = useNavigate();

	const {
		timeLeft,
		isRunning,
		formatTime,
		start,
		pause,
		setCustomTime,
		showReward,
		lastFocusMinutes,
		closeRewardModal,
	} = usePomodoro();

	const defaultTime = 25;
	const [plants, setPlants] = useState<(Plant | null)[]>([]);
	const [lastSetTime, setLastSetTime] = useState<number>(defaultTime);

	const handleSetTimer = (minutes: number) => {
		setLastSetTime(minutes);
		setCustomTime(minutes);
	};

	// const handleSetTimer = (seconds: number) => {
	// 	setLastSetTime(seconds); // store the value for reset
	// 	setCustomTime(seconds / 60); // convert seconds → minutes if your timer internally uses minutes
	//   };

	const handleReset = () => {
		pause();
		setCustomTime(lastSetTime);
	};

	const goToGarden = async () => {
		pause(); // stop timer

		try {
			const res = await fetch('http://localhost:3000/api/gallery');
			const data = await res.json();
			// assuming data.rewards is an array of Plant
			setPlants(data.rewards || []);
		} catch (err) {
			console.error('Failed to fetch garden', err);
			setPlants([]); // fallback empty
		}

		navigate('/garden');
	};

	const goBackToTimer = () => navigate('/');
	// console.log('reward showing?');
	// console.log(showReward);

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<TimerPage
							timeLeft={timeLeft}
							isRunning={isRunning}
							formatTime={formatTime}
							onStart={start}
							onPause={pause}
							onReset={handleReset}
							onStartBreak={() => handleSetTimer(10)}
							onStartDefault={goToGarden}
							onSetTimer60={() => handleSetTimer(60)}
							onSetTimer30={() => handleSetTimer(30)}
							onSetTimer45={() => handleSetTimer(45)}
							onSetTimer15={() => handleSetTimer(15)}
							onSetTimer5={() => handleSetTimer(5)}
						/>
					}
				/>

				<Route
					path="/garden"
					element={<GardenPage plants={plants} onBackToTimer={goBackToTimer} />}
				/>
			</Routes>

			<RewardModal
				isOpen={showReward}
				focusMinutes={lastSetTime}
				onClose={closeRewardModal}
				onAccept={async (minutes) => {
					try {
						const res = await completeFocus(minutes);
						// console.log('Reward saved:', res);
						// console.log('Reward saved');
					} catch (err) {
						console.error('Failed to save reward', err);
					}
					closeRewardModal();
				}}
			/>
		</>
	);
}
