import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { sidebarState } from '../../../state/recoil/sidebar';
import DraggableDiv from './DraggableDiv';
import { StyledCloseSideBar, StyledOpenSideBar } from './styles';

const SideBar = () => {
  const [sideBar, setSideBar] = useRecoilState(sidebarState);

  const onDragOver = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <>
      {sideBar.isOpened ? (
        <StyledOpenSideBar width={sideBar.width} onDragOver={onDragOver}>
          <div className="close-button">
            <button onClick={() => setSideBar({ ...sideBar, isOpened: false })}>
              &#171;
            </button>
          </div>
          <nav>
            <Link href="/">홈</Link>
            <Link href="#">학습 일정표</Link>
            <Link href="#">노트</Link>
            <Link href="#">시험지</Link>
          </nav>
          <DraggableDiv />
        </StyledOpenSideBar>
      ) : (
        <StyledCloseSideBar>
          <button onClick={() => setSideBar({ ...sideBar, isOpened: true })}>
            &#187;
          </button>
        </StyledCloseSideBar>
      )}
    </>
  );
};

export default SideBar;
