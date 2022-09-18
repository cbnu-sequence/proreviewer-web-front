import { FocusDayType, onClickFocusDayType } from '../../Schedule/types';

export type CalendarPropsType = {
  focusDay: FocusDayType;
  onClickFocusDay: onClickFocusDayType;
};

export type selectedPrevYearType = number;
export type selectedPrevMonthType = number;
export type selectedYearType = number;
export type selectedMonthType = number;
export type selectedNextYearType = number;
export type selectedNextMonthType = number;

export type selectedPrevMonth_lastDateType = number;
export type selectedMonth_firstDate_DayOfTheWeekType = number;
export type selectedMonth_lastDateType = number;

export type initArrType = Array<{
  year: number;
  month: number;
  date: number;
}>;

export type newDataType = {
  year: number;
  month: number;
  date: number;
  focusDayBackgroundColor?: string;
  dateColor?: string;
  dateOpacity?: string;
  data?: any;
};

export type rowArrType = Array<newDataType>;
export type resultArrType = Array<rowArrType>;
