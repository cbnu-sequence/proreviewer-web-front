import styled from '@emotion/styled';

export const StyledSidebarBox = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #2fa599;
  color: white;
  width: 230px;
  z-index: 100;
  .sidebar-box {
    &__closeIcon {
      margin: 15px 5px 0 0;
      display: flex;
      justify-content: end;
      font-size: 16px;
      cursor: pointer;
      color: white;
    }
    &__link {
      margin-top: 50px;
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
      &__link {
        font-size: 13px;
      }
    }
  }
`;
