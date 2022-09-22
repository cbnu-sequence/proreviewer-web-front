export type FocusDayType = {
  year: number;
  month: number;
  date: number;
  dayOfTheWeek: string;
  data: any;
};

export type onClickFocusDayType = ({
  clickFocusYear,
  clickFocusMonth,
  clickFocusDate,
  clickFocusDayOfTheWeek,
  clickFocusData,
}: {
  clickFocusYear: number;
  clickFocusMonth: number;
  clickFocusDate: number;
  clickFocusDayOfTheWeek: string;
  clickFocusData: any;
}) => void;
