import styled from '@emotion/styled';

interface StyledWrapperProps {
  sideBar: number;
  open: boolean;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
  margin-left: ${(props) => (props.open ? props.sideBar : 30)}px;
  min-height: 100vh;
`;
