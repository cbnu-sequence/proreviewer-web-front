import styled from '@emotion/styled';

interface StyledOpenSideBarProps {
  width: number;
}

export const StyledOpenSideBar = styled.div<StyledOpenSideBarProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: ${(props) => props.width}px;
  height: 100vh;
  background-color: #2c2b2b;
  color: white;
  z-index: 100;
  .close-button {
    text-align: end;
    margin-right: 7px;
    button {
      font-size: 20px;
      font-weight: 700;
    }
  }

  nav {
    width: 98%;
    margin: 40px auto 0;
    text-align: center;
    font-size: 13px;
    a {
      display: block;
      margin: 30px 0;
    }
  }
`;

export const StyledCloseSideBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 30px;
  height: 100vh;
  background-color: #2c2b2b;
  color: white;
  text-align: center;
  z-index: 100;
  button {
    font-size: 20px;
    font-weight: 700;
  }
`;
