import styled from '@emotion/styled';

type StyledWrapperProps = {
  [K in 'isOpened']: boolean;
};

export const StyledWrapper = styled.div<StyledWrapperProps>`
  margin-left: ${(props) => (props.isOpened ? 200 : 30)}px;
`;
