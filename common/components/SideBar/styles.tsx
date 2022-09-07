import styled from '@emotion/styled';

interface StyledSideBarProps {
  width: number;
}

export const StyledSideBar = styled.div<StyledSideBarProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: ${(props) => props.width}px;
  border: 1px solid black;
  height: 100vh;
  background-color: #2c2b2b;
  color: white;
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
