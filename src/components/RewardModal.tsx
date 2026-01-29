import { useEffect, useMemo, useState } from 'react';
import { Button } from './ui/button';

export const plantImages: Record<string, string> = {
	mango: '/mango.png',
	flower: '/flower.png',
	pepper: '/pepper.png',
	orange: '/orange.png',
	strawberry: '/strawberry.png',
};

export type PlantType = 'flower' | 'mango' | 'strawberry' | 'orange' | 'pepper';
export type PlantColor = 'default';

export interface Plant {
	type: PlantType;
	color: PlantColor;
}

// For backwards compatibility
export type FlowerColor = PlantColor;

interface RewardModalProps {
	isOpen: boolean;
	focusMinutes: number;
	onClose: () => void;
	onAccept: (focusMinutes: number) => void;
}

function plantForMinutes(minutes: number): Plant {
	switch (minutes) {
		case 0.15: // 30
			return { type: 'mango', color: 'default' };
		case 0.3: // 45
			return { type: 'orange', color: 'default' };
		case 1: // 60
			return { type: 'strawberry', color: 'default' };
		default:
			return { type: 'flower', color: 'default' };
	}
}

export function RewardModal({ isOpen, focusMinutes, onClose, onAccept }: RewardModalProps) {
	const [revealed, setRevealed] = useState<number | null>(null);

	// compute reward whenever focusMinutes changes
	// console.log('focusMinutes:', focusMinutes);
	const reward = useMemo(() => plantForMinutes(focusMinutes), [focusMinutes]);

	useEffect(() => {
		// console.log('Changing is open');
		// console.log(revealed);
		if (isOpen) setRevealed(null);
	}, [isOpen]);

	if (!isOpen) return null;

	const handleReveal = (index: number) => {
		if (revealed !== null) return;
		setRevealed(index);
	};

	const handleAccept = () => {
		onAccept(focusMinutes);
		onClose();
	};

	const getPlantIcon = (plant: Plant) => {
		const plantIcon = <img src={plantImages[plant.type]} alt={plant.type} className="w-16 h-16" />;
		return (
			<div className="w-16 h-16" style={{ '--fill-0': 'none' } as React.CSSProperties}>
				{plantIcon}
			</div>
		);
	};

	return (
		<div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
			<div className="bg-[#BBFFD4] rounded-3xl p-12 max-w-lg w-full mx-4 border-2 border-[#277645]">
				<h2 className="text-center text-2xl mb-12 text-[#277645] font-medium">
					Time for a reward!
				</h2>

				<div className="flex items-center justify-center gap-8">
					{[0, 1, 2].map((index) => (
						<button
							key={index}
							onClick={() => handleReveal(index)}
							disabled={revealed !== null}
							className="w-24 h-24 rounded-full border-2 border-[#277645] bg-[#CDFFC0] flex items-center justify-center hover:bg-[#b8e6ad] disabled:hover:bg-[#CDFFC0] transition-all disabled:cursor-not-allowed"
						>
							{revealed === index ? (
								getPlantIcon(reward)
							) : (
								<span className="text-5xl text-[#277645] font-bold">?</span>
							)}
						</button>
					))}
				</div>

				<div className="flex justify-center mt-8 h-10">
					{revealed !== null && (
						<Button
							onClick={handleAccept}
							variant="outline"
							className="w-[163px] h-10 text-[17px] font-semibold bg-[#BBFFD4] border-2 border-[#277645] text-[#2d5f4c] rounded-full hover:bg-[#a8e6c1]"
						>
							Accept
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
