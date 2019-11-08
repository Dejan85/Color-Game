const useClickEvent = (dom) => {
	const difficult = function() {
		dom.btns.forEach((item) => {
			item.onclick = () => {
				dom.createBoxes(item);
				dom.colorBoxes();
				dom.headerGenerateColor();
			};
		});
	};

	const newColor = function() {
		dom.newColor.onclick = () => {
			dom.colorBoxes();
			dom.headerGenerateColor();
		};
	};

	return { difficult, newColor };
};

export default useClickEvent;
