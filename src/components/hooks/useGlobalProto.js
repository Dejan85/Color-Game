const useGlobalProto = () => {
	// const colors = new Array([]);
	Object.prototype.colors = [];

	//generate random color
	Object.prototype.color = () =>
		`RGB(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
			Math.random() * 255
		)})`;

	// generate color for header
	Object.prototype.colorHeader = () => colors[Math.floor(Math.random() * colors.length)];

	//Clicked color check
	Object.prototype.checkClickedColor = function(index, box) {
		if (Object.colors[index] === this.headerColor.textContent) {
			this.header.style.background = this.headerColor.textContent;
			[ ...this.boxesParent.children ].forEach((item) => {
				item.style.background = this.headerColor.textContent;
				item.style.opacity = '1';
				item.onclick = null;
				this.menuMessage.textContent = 'Correct!';
			});
		} else {
			console.log(box);
			box.style.opacity = '0';
			this.menuMessage.textContent = 'Try Again...';
		}
	};

	return { colors };
};

export default useGlobalProto;
