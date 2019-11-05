const useRgb = () => {
	const rgb = () => {
		const r = Math.floor(Math.random() * 255);
		const g = Math.floor(Math.random() * 255);
		const b = Math.floor(Math.random() * 255);

		return `RGB(${r}, ${g}, ${b})`;
	};

	return { rgb };
};

export default useRgb;
