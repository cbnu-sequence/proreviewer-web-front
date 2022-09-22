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
    &__profile {
      position: fixed;
      right: 22px;
      top: 9px;
      z-index: 101;
      cursor: pointer;
      border-radius: 50%;
      width: 28px;
      height: 28px;
    }
    &__profile-box {
      position: fixed;
      width: 200px;
      top: 40px;
      right: 27px;
      z-index: 101;
      background-color: white;
      border-radius: 10px;
      padding: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    &__profile-button {
      border: none;
      background-color: white;
      width: 100%;
      cursor: pointer;
      padding: 10px 0;
      &:hover {
        background-color: #dedada69;
        border-radius: 10px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .header-box {
      &__profile {
        right: 10px;
        top: 11px;
        width: 23px;
        height: 23px;
      }
      &__profile-box {
        width: 170px;
        right: 14px;
      }
      &__profile-button {
        font-size: 12px;
      }
    }
  }
`;
