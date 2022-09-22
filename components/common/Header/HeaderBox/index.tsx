import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import { StyledHeaderBox } from './styles';
import { HeaderBoxPropsType } from './types';
import { useState } from 'react';

const HeaderBox = ({
  isOpenedSideBar,
  setIsOpenedSideBar,
}: HeaderBoxPropsType) => {
  const [isOpenedProfileBox, setIsOpenedProfileBox] = useState(false);

  return (
    <StyledHeaderBox className="header-box">
      {!isOpenedSideBar && (
        <span
          className="header-box__openIcon"
          onClick={() => setIsOpenedSideBar(true)}
        >
          <AiOutlineMenu />
        </span>
      )}
      <Link href="/">
        <a>
          <Image
            className="header-box__logo"
            src="/proReLogo.png"
            width="150px"
            height="30px"
            alt="프로리뷰어 로고"
          />
        </a>
      </Link>
      <span
        className="header-box__profile"
        onClick={() => setIsOpenedProfileBox(!isOpenedProfileBox)}
      >
        <Image src="/user.png" layout="fill" alt="프로필" />
      </span>
      {isOpenedProfileBox && (
        <div className="header-box__profile-box">
          <button className="header-box__profile-button">프로필</button>
          <button className="header-box__profile-button">로그아웃</button>
        </div>
      )}
    </StyledHeaderBox>
  );
};

export default HeaderBox;
