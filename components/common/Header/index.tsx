import Link from 'next/link';
import { useState } from 'react';
import { StyledHeader } from './styles';
import { AiOutlineMenu, AiOutlineDoubleLeft } from 'react-icons/ai';

const Header = () => {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  return (
    <StyledHeader className="header">
      <div className="header__div">Pro Reviewer</div>
      {!isOpenedMenu ? (
        <div className="header__openIcon" onClick={() => setIsOpenedMenu(true)}>
          <AiOutlineMenu />
        </div>
      ) : (
        <>
          <div
            className="header__closeIcon"
            onClick={() => setIsOpenedMenu(false)}
          >
            <AiOutlineDoubleLeft />
          </div>
          <nav className="header__menu">
            <Link href="/">홈</Link>
            <Link href="#">학습 일정표</Link>
            <Link href="#">노트</Link>
            <Link href="#">시험지</Link>
          </nav>
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
