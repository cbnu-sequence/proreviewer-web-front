import { useState } from 'react';
import { StyledHeader } from './styles';

import HeaderBox from './HeaderBox';
import SidebarBox from './SidebarBox';

const Header = () => {
  const [isOpenedSideBar, setIsOpenedSideBar] = useState(false);

  return (
    <StyledHeader>
      <HeaderBox
        isOpenedSideBar={isOpenedSideBar}
        setIsOpenedSideBar={setIsOpenedSideBar}
      />
      {isOpenedSideBar && (
        <SidebarBox setIsOpenedSideBar={setIsOpenedSideBar} />
      )}
    </StyledHeader>
  );
};

export default Header;
