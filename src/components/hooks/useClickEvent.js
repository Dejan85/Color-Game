const useClickEvent = () => {
	const difficult = function() {
		this.btns.forEach((item) => {
			item.onclick = () => {
				this.createBoxes(item);
				this.colorBoxes();
				this.headerGenerateColor();
			};
		});
	};

	const newColor = function() {
		this.newColor.onclick = () => {
			this.colorBoxes();
			this.headerGenerateColor();
		};
	};

	return { difficult, newColor };
};

export default useClickEvent;
