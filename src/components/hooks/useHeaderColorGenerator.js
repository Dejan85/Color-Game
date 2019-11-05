const useHeaderColorGenerator = (colors, headerColor) => {
	const headerColorGenerator = () => {
		const rand = Math.floor(Math.random() * 5);
		headerColor.textContent = colors[rand];
		return colors[rand];
	};
	return { headerColorGenerator };
};

export default useHeaderColorGenerator;
