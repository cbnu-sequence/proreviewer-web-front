import styled from '@emotion/styled';

export const StyledSidebarBox = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #2fa599;
  color: white;
  width: 230px;
  text-align: center;
  padding-top: 40px;
  z-index: 100;
  a {
    display: block;
    margin: 30px 0;
    font-size: 14px;
  }
  .sidebar-box {
    &__closeIcon {
      position: fixed;
      top: 12px;
      left: 205px;
      font-size: 16px;
      z-index: 101;
      cursor: pointer;
      color: white;
    }
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    a {
      font-size: 13px;
    }
    .sidebar-box {
      &__closeIcon {
        left: 178px;
      }
    }
  }
`;
