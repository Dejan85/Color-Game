import useDom from './hooks/useDom';
import useRgb from './hooks/useRgb';
import useHeaderColorGenerator from './hooks/useHeaderColorGenerator';
import useBoxHooks from './hooks/useBoxHooks';
import useColorChack from './hooks/useColorChack';

const colors = [];
let colorHeader;
const { newColor, btns, boxes, headerColor, header } = useDom();
const { rgb } = useRgb();
const { generatorBoxColor, restAllBox } = useBoxHooks(boxes);
const { headerColorGenerator } = useHeaderColorGenerator(colors, headerColor);
const { colorChack } = useColorChack(header, boxes);

// generate colors at start
generatorBoxColor(rgb, colors, headerColorGenerator);
// generate random color for header
colorHeader = headerColorGenerator();

// generate new color on click
newColor.onclick = () => {
	colors.length = 0;
	// generate colors at start
	generatorBoxColor(rgb, colors, headerColorGenerator);
	// generate random color for header
	colorHeader = headerColorGenerator();
	// return header color to default
	header.style.background = '#4581B3';
	//reset all box
	restAllBox();
};

// check colors
boxes.forEach((box, index) => {
	box.onclick = colorChack.bind(box, colors[index], colorHeader);
	// box.onclick = () => {
	// 	colorChack(colors[index], colorHeader);
	// };
});
