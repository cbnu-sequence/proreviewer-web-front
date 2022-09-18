export type FocusDayType = {
  year: number;
  month: number;
  date: number;
  data: any;
};

export type onClickFocusDayType = ({
  clickFocusYear,
  clickFocusMonth,
  clickFocusDate,
  clickFocusData,
}: {
  clickFocusYear: number;
  clickFocusMonth: number;
  clickFocusDate: number;
  clickFocusData: any;
}) => void;
