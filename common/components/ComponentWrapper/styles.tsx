import styled from '@emotion/styled';

interface StyledWrapperProps {
  sideBar: number;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
  margin-left: ${(props) => props.sideBar}px;
  min-height: 100vh;
`;
