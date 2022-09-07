import Link from 'next/link';
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
      <nav>
        <Link href="/">홈</Link>
        <Link href="#">학습 일정표</Link>
        <Link href="#">노트</Link>
        <Link href="#">시험지</Link>
      </nav>
      <DraggableDiv />
    </StyledSideBar>
  );
};

export default SideBar;
