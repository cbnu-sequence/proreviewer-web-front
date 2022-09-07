import { useSetRecoilState } from 'recoil';
import { sidebarState } from '../../../../state/recoil/sidebar';
import { StyledDraggableDiv } from './styles';

const DraggableDiv = () => {
  const setSidebar = useSetRecoilState(sidebarState);

  const onDragEnd = (e: { clientX: number }) => {
    if (e.clientX <= 40) setSidebar({ width: 40 });
    else setSidebar({ width: e.clientX });
  };

  return <StyledDraggableDiv draggable="true" onDragEnd={onDragEnd} />;
};

export default DraggableDiv;
