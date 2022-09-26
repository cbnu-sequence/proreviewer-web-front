export type FocusDayType = {
  year: number;
  month: number;
  date: number;
  dayOfTheWeek: string;
  data: any;
};

export type onClickFocusDayType = ({
  focusYear,
  focusMonth,
  focusDate,
  focusDayOfTheWeek,
  focusData,
}: {
  focusYear: number;
  focusMonth: number;
  focusDate: number;
  focusDayOfTheWeek: string;
  focusData: any;
}) => void;
