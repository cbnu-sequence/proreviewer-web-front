import { css } from '@emotion/react';
import styled from '@emotion/styled';

type StyledToastItemProps = {
  category: 'Success' | 'Failure' | 'Warn' | 'Info';
};

export const StyledToastItem = styled.div<StyledToastItemProps>`
  min-height: 42px;
  margin-top: 8px;
  border-radius: 5px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  .toastItem {
    &__categoryIcon {
      font-size: 20px;
      margin-top: 4px;
    }
    &__message {
      font-size: 11px;
      font-weight: 600;
      flex: 1;
      text-align: start;
      margin: 0 15px 0 10px;
    }
    &__closeIcon {
      font-size: 13px;
      cursor: pointer;
      color: gray;
      margin-top: 4px;
    }
  }

  ${(props) =>
    props.category === 'Success' &&
    css`
      background-color: #d1e7dd;
      color: #0f5132;
      border: 1px solid #badbcc;
    `}
  ${(props) =>
    props.category === 'Failure' &&
    css`
      background-color: #f8d7da;
      color: #842029;
      border: 1px solid #f5c2c7;
    `}
  ${(props) =>
    props.category === 'Warn' &&
    css`
      background-color: #fff3cd;
      color: #664d03;
      border: 1px solid #ffecb5;
    `}
  ${(props) =>
    props.category === 'Info' &&
    css`
      background-color: #cfe2ff;
      color: #084298;
      border: 1px solid #b6d4fe;
    `}
`;
