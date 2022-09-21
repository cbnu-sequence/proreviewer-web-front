import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import { StyledHeaderBox } from './styles';
import { HeaderBoxPropsType } from './types';

const HeaderBox = ({
  isOpenedSideBar,
  setIsOpenedSideBar,
}: HeaderBoxPropsType) => {
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
    </StyledHeaderBox>
  );
};

export default HeaderBox;
