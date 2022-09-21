import styled from '@emotion/styled';

export const StyledSidebarBox = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #2fa599;
  color: white;
  width: 230px;
  z-index: 101;
  .sidebar-box {
    &__closeIcon {
      position: fixed;
      top: 15px;
      left: 205px;
      z-index: 101;
      font-size: 16px;
      cursor: pointer;
      color: white;
    }
    &__link {
      margin-top: 80px;
      text-align: center;
      font-size: 14px;
      a {
        display: block;
        margin: 30px 0;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    .sidebar-box {
      &__closeIcon {
        top: 10px;
        left: 178px;
      }
      &__link {
        margin-top: 55px;
        font-size: 13px;
      }
    }
  }
`;
