import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  height: 40px;
  .header {
    &__div {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      text-align: center;
      z-index: 100;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      padding: 10px 0;
    }
    &__openIcon {
      position: fixed;
      left: 10px;
      top: 12px;
      font-size: 17px;
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
      background-color: #2c2b2b;
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
