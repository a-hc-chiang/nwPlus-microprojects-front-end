export async function completeFocus(focusMinutes: number) {
	const res = await fetch('http://localhost:3000/api/complete-focus', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ focusMinutes }),
	});

	if (!res.ok) {
		const err = await res.json();
		throw new Error(err.error || 'Failed to save reward');
	}

	return res.json();
}
