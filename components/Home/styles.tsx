import styled from '@emotion/styled';

type StyledHomeProps = {
  isOpened: boolean;
};

export const StyledHome = styled.div<StyledHomeProps>`
  margin-left: ${(props) => (props.isOpened ? '200' : '30')}px;
`;
