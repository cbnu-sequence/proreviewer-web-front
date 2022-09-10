import Link from 'next/link';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { sidebarState } from '../../../state/recoil/sidebar';
import { StyledCloseSideBar, StyledOpenSideBar } from './styles';

const SideBar = () => {
  const [sideBar, setSideBar] = useRecoilState(sidebarState);

  const onClickButton = useCallback(
    (bool: boolean) => {
      setSideBar({ ...sideBar, isOpened: bool });
    },
    [setSideBar, sideBar]
  );

  return (
    <>
      {sideBar.isOpened ? (
        <StyledOpenSideBar isOpened={sideBar.isOpened}>
          <div className="close-button">
            <button onClick={() => onClickButton(false)}>&#171;</button>
          </div>
          <nav>
            <Link href="/">홈</Link>
            <Link href="#">학습 일정표</Link>
            <Link href="#">노트</Link>
            <Link href="#">시험지</Link>
          </nav>
        </StyledOpenSideBar>
      ) : (
        <StyledCloseSideBar>
          <button onClick={() => onClickButton(true)}>&#187;</button>
        </StyledCloseSideBar>
      )}
    </>
  );
};

export default SideBar;
