import Link from 'next/link';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { StyledSidebarBox } from './styles';
import { SidebarBoxPropsType } from './types';

const SidebarBox = ({ setIsOpenedSideBar }: SidebarBoxPropsType) => {
  return (
    <StyledSidebarBox className="sidebar-box">
      <span
        className="sidebar-box__closeIcon"
        onClick={() => setIsOpenedSideBar(false)}
      >
        <AiOutlineDoubleLeft />
      </span>
      <Link href="/">홈</Link>
      <Link href="/calendar">학습 일정표</Link>
      <Link href="#">노트</Link>
      <Link href="#">시험지</Link>
    </StyledSidebarBox>
  );
};

export default SidebarBox;
