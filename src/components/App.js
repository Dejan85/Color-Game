import useDom from './hooks/useDom';
import useGlobalProto from './hooks/useGlobalProto';
import useClickEvent from './hooks/useClickEvent';

const { dom } = useDom();
useGlobalProto();
const { difficult, newColor } = useClickEvent();

dom.createBoxes();
dom.colorBoxes();
dom.headerGenerateColor();
difficult.call(dom);
newColor.call(dom);
