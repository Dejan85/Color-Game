const useColorChack = (header, boxes) => {
	const colorChack = function(colors, colorHeader) {
		if (colors === colorHeader) {
			header.style.background = colors;
			boxes.forEach((box) => {
				box.style.background = colorHeader;
			});
		} else {
			this.style.opacity = '0';
		}
	};

	return { colorChack };
};

export default useColorChack;
