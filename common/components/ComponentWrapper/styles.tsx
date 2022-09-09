import styled from '@emotion/styled';

interface StyledWrapperProps {
  width: number;
  isOpened: boolean;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
  margin-left: ${(props) => (props.isOpened ? props.width : 30)}px;
  min-height: 100vh;
`;
