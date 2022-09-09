import { useSetRecoilState } from 'recoil';
import { sidebarState } from '../../../../state/recoil/sidebar';
import { StyledDraggableDiv } from './styles';

const DraggableDiv = () => {
  const setSidebar = useSetRecoilState(sidebarState);

  const onDragEnd = (e: { clientX: number }) => {
    if (e.clientX <= 160) setSidebar({ width: 160, isOpened: true });
    else setSidebar({ width: e.clientX, isOpened: true });
  };

  return <StyledDraggableDiv draggable="true" onDragEnd={onDragEnd} />;
};

export default DraggableDiv;
