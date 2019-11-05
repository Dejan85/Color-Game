const useDom = () => {
	const newColor = document.querySelector('.menu__h2');
	const btns = [ ...document.querySelector('.menu__ul').children ];
	const boxes = [ ...document.querySelector('.content__boxes').children ];
	const headerColor = document.querySelector('.header__color');
	const header = document.querySelector('.header');
	return { newColor, btns, boxes, headerColor, header };
};

export default useDom;
