import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  height: 44px;
  .header {
    &__box {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      text-align: center;
      z-index: 100;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      padding: 7px 0;
      background-color: white;
    }
    &__logo {
      cursor: pointer;
    }
    &__openIcon {
      position: fixed;
      left: 10px;
      top: 14px;
      font-size: 19px;
      z-index: 101;
      cursor: pointer;
    }
    &__closeIcon {
      position: fixed;
      top: 12px;
      left: 178px;
      font-size: 14px;
      z-index: 101;
      cursor: pointer;
      color: white;
    }
    &__menu {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      background-color: #2fa599;
      color: white;
      width: 200px;
      font-size: 12px;
      text-align: center;
      padding-top: 40px;
      z-index: 100;
      a {
        display: block;
        margin: 30px 0;
      }
    }
  }
`;
