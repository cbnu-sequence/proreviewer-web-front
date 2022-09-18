import styled from '@emotion/styled';

export const StyledSchedule = styled.div`
  padding-bottom: 30px;
  .calendar-title {
    margin: 20px 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &__button {
      border: 1px solid lightgray;
      cursor: pointer;
      background-color: white;
      color: lightgray;
      font-size: 15px;
      border-radius: 50%;
      margin: 0 30px;
      height: 25px;
      width: 25px;
    }
    &__content {
      font-size: 17px;
      font-weight: 600;
    }
  }
  .calendar-table {
    margin: 0 auto;
    border-collapse: collapse;
    &__thead {
      border: 1px solid #d3d3d35c;
      padding: 30px;
    }
    &__columnTitle {
      width: 130px;
      text-align: start;
      padding-left: 3px;
      font-size: 14px;
    }
    &__day {
      width: 130px;
      height: 100px;
      overflow: auto;
      border: 1px solid #d3d3d35c;
      position: relative;
    }
    &__date {
      position: absolute;
      left: 3px;
      top: 3px;
      font-size: 13px;
    }
    &__schedule {
      position: absolute;
      left: 0;
      right: 0;
      top: 25px;
    }
    &__scheduleItem {
      color: white;
      border-radius: 3px;
      margin: 2px 1px;
      font-size: 11px;
      font-weight: 700;
      padding: 5px 3px;
    }
  }

  @media screen and (max-width: 768px) {
    .calendar-title {
      margin: 10px 0 0;
      &__button {
        border: none;
        font-size: 18px;
      }
      &__content {
        font-size: 14px;
      }
    }
    .calendar-table {
      &__columnTitle {
        font-size: 10px;
      }
      &__date {
        font-size: 10px;
      }
      &__scheduleItem {
        font-size: 8px;
      }
    }
  }
`;
