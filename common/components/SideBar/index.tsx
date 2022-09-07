import { useRecoilValue } from 'recoil';
import { sidebarState } from '../../../state/recoil/sidebar';
import DraggableDiv from './DraggableDiv';
import { StyledSideBar } from './styles';

const SideBar = () => {
  const sideBar = useRecoilValue(sidebarState);

  const onDragOver = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <StyledSideBar width={sideBar.width} onDragOver={onDragOver}>
      <DraggableDiv />
    </StyledSideBar>
  );
};

export default SideBar;
