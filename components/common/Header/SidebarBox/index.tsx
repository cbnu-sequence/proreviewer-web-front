import Link from 'next/link';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { StyledSidebarBox } from './styles';
import { SidebarBoxPropsType } from './types';

const SidebarBox = ({ setIsOpenedSideBar }: SidebarBoxPropsType) => {
  return (
    <StyledSidebarBox className="sidebar-box">
      <div
        className="sidebar-box__closeIcon"
        onClick={() => setIsOpenedSideBar(false)}
      >
        <AiOutlineDoubleLeft />
      </div>
      <div className="sidebar-box__link">
        <Link href="/">홈</Link>
        <Link href="/calendar">학습 일정표</Link>
        <Link href="#">노트</Link>
        <Link href="#">시험지</Link>
      </div>
    </StyledSidebarBox>
  );
};

export default SidebarBox;
