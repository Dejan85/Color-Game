const useBoxHooks = (boxes) => {
	const generatorBoxColor = (rgb, colors, headerColorGenerator) => {
		boxes.forEach((item) => {
			const color = rgb();
			item.style.background = color;
			colors.push(color);
		});
		headerColorGenerator(colors);
	};

	const restAllBox = function() {
		boxes.forEach((box) => {
			return (box.style.opacity = '1');
		});
	};

	return { generatorBoxColor, restAllBox };
};

export default useBoxHooks;
