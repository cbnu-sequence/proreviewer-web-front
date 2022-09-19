import styled from '@emotion/styled';

export const StyledFocusDay = styled.div`
  width: 60%;
  margin: 0 auto;
  border: 1px solid #d3d3d37a;
  border-radius: 10px;
  padding: 20px;
  .focusday {
    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    &__date {
      font-size: 16px;
      font-weight: 700;
      //text-align: center;
    }
    &__button {
      border: none;
      background-color: inherit;
      cursor: pointer;
    }
    &__addBtn {
      font-size: 21px;
      color: gray;
    }
    &__editBtn {
      position: absolute;
      top: 20px;
      right: 35px;
      font-size: 14px;
      color: white;
    }
    &__deleteBtn {
      position: absolute;
      top: 20px;
      right: 10px;
      font-size: 14px;
      color: white;
    }
    &__scheduleItem {
      margin: 10px 0;
      border-radius: 10px;
      color: white;
      font-weight: 700;
      padding: 10px 60px 10px 10px;
      position: relative;
    }
    &__title {
      font-size: 15px;
    }
    &__content {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    .focusday {
      &__header {
        margin-bottom: 10px;
      }
      &__date {
        font-size: 13px;
      }
      &__addBtn {
        font-size: 17px;
      }
      &__editBtn {
        font-size: 12px;
      }
      &__deleteBtn {
        font-size: 12px;
      }
      &__scheduleItem {
        margin: 5px 0;
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
