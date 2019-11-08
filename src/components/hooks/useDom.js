const useDom = () => {
	function Dom(boxesParent, newColor, btns, headerColor, header, menuMessage) {
		this.boxesParent = boxesParent;
		this.newColor = newColor;
		this.btns = btns;
		this.headerColor = headerColor;
		this.header = header;
		this.menuMessage = menuMessage;
	}

	Dom.prototype.createBoxes = function(btn) {
		this.boxesParent.innerHTML = '';
		let counter = 6;
		if (btn && btn.getAttribute('data-difficult') === 'easy') {
			counter = 3;
		}

		for (let i = 0; i < counter; i++) {
			this.boxesParent.innerHTML += '<div class="content__box"></div>';
		}
	};

	Dom.prototype.colorBoxes = function() {
		this.header.style.background = '#4581B3';
		Object.colors.length = 0;
		[ ...this.boxesParent.children ].forEach((item, index) => {
			const color = Object.color();
			Object.colors.push(color);
			item.style.background = color;
			item.onclick = Object.checkClickedColor.bind(dom, index, item);
		});
	};

	Dom.prototype.headerGenerateColor = function() {
		this.headerColor.textContent = Object.colorHeader();
	};

	const dom = new Dom(
		document.querySelector('.content__boxes'),
		document.querySelector('.menu__h2'),
		[ ...document.querySelector('.menu__ul').children ],
		document.querySelector('.header__color'),
		document.querySelector('.header'),
		document.querySelector('.menu__message')
	);

	return { dom };
};

export default useDom;
