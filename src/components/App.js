import useDom from './hooks/useDom';
import useGlobalProto from './hooks/useGlobalProto';
import useClickEvent from './hooks/useClickEvent';

const { dom } = useDom();
useGlobalProto();
const { difficult, newColor } = useClickEvent(dom);

dom.createBoxes();
dom.colorBoxes();
dom.headerGenerateColor();
difficult();
newColor();
