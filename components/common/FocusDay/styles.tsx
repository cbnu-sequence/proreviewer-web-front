import styled from '@emotion/styled';

export const StyledFocusDay = styled.div`
  width: 910px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 20px;
  background-color: #e4f2e579;
  .focusday {
    &__header {
      margin-bottom: 20px;
      position: relative;
      text-align: center;
    }
    &__date {
      font-size: 17px;
      font-weight: 700;
    }
    &__button {
      border: none;
      background-color: inherit;
      cursor: pointer;
    }
    &__addBtn {
      font-size: 22px;
      color: gray;
      position: absolute;
      right: 0px;
      top: 0px;
    }
    &__urlBtn {
      position: absolute;
      top: 20px;
      right: 62px;
      font-size: 16px;
      color: white;
      height: 23px;
      width: 30px;
    }
    &__editBtn {
      position: absolute;
      top: 20px;
      right: 35px;
      font-size: 16px;
      color: white;
      height: 23px;
      width: 30px;
    }
    &__deleteBtn {
      position: absolute;
      top: 20px;
      right: 10px;
      font-size: 16px;
      color: white;
      height: 23px;
      width: 30px;
    }
    &__scheduleItem {
      margin: 10px 0;
      border-radius: 10px;
      color: white;
      font-weight: 700;
      padding: 10px 95px 10px 10px;
      position: relative;
    }
    &__title {
      font-size: 14px;
      margin-bottom: 4px;
    }
    &__content {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 950px) {
    width: 100%;
    border-radius: 20px;
  }

  @media screen and (max-width: 768px) {
    .focusday {
      &__date {
        font-size: 14px;
      }
      &__addBtn {
        font-size: 17px;
      }
      &__urlBtn {
        font-size: 14px;
        right: 54px;
        width: 26px;
      }
      &__editBtn {
        font-size: 14px;
        right: 28px;
        width: 26px;
      }
      &__deleteBtn {
        font-size: 14px;
        right: 3px;
        width: 26px;
      }
      &__scheduleItem {
        margin: 5px 0;
        padding: 10px 85px 10px 10px;
      }
      &__title {
        font-size: 13px;
      }
      &__content {
        font-size: 11px;
      }
    }
  }
`;
