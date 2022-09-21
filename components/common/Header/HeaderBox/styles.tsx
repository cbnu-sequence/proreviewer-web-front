import styled from '@emotion/styled';

export const StyledHeaderBox = styled.header`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  text-align: center;
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  padding: 7px 0;
  .header-box {
    &__openIcon {
      position: fixed;
      left: 10px;
      top: 14px;
      font-size: 19px;
      z-index: 101;
      cursor: pointer;
    }
    &__logo {
      cursor: pointer;
    }
  }
`;
