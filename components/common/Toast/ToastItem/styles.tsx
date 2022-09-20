import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  pr_Blue_InfoBox,
  pr_Green_SuccessBox,
  pr_Red_FailureBox,
  pr_Yellow_WarnBox,
} from '../../../../styles/colors';

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
      ${pr_Green_SuccessBox};
    `}
  ${(props) =>
    props.category === 'Failure' &&
    css`
      ${pr_Red_FailureBox};
    `}
  ${(props) =>
    props.category === 'Warn' &&
    css`
      ${pr_Yellow_WarnBox};
    `}
  ${(props) =>
    props.category === 'Info' &&
    css`
      ${pr_Blue_InfoBox};
    `}
`;
