import Link from 'next/link';
import { useState } from 'react';
import { StyledHeader } from './styles';
import { AiOutlineMenu, AiOutlineDoubleLeft } from 'react-icons/ai';
import Image from 'next/image';

const Header = () => {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  return (
    <StyledHeader className="header">
      <div className="header__box">
        <Link href="/">
          <a>
            <Image
              className="header__logo"
              src="/proReLogo.png"
              width="150px"
              height="30px"
              alt="프로리뷰어 로고"
            />
          </a>
        </Link>
      </div>
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
            <Link href="/calendar">학습 일정표</Link>
            <Link href="#">노트</Link>
            <Link href="#">시험지</Link>
          </nav>
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
