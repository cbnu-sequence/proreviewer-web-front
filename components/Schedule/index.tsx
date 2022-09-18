import { useEffect, useState } from 'react';
import Calendar from '../common/Calendar';
import FocusDay from '../common/FocusDay';
import { StyledSchedule } from './styles';
import { FocusDayType, onClickFocusDayType } from './types';

const Schedule = () => {
  const [focusDay, setFocusDay] = useState<FocusDayType>({
    year: 0,
    month: 0,
    date: 0,
    data: [],
  });

  useEffect(() => {
    //(API 요청) 해당 날짜의 데이터만 받아오기 (오늘만)
    setFocusDay({
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      date: new Date().getDate(),
      data: [],
    });
  }, []);

  const onClickFocusDay: onClickFocusDayType = ({
    clickFocusYear,
    clickFocusMonth,
    clickFocusDate,
    clickFocusData,
  }) => {
    setFocusDay({
      year: clickFocusYear,
      month: clickFocusMonth,
      date: clickFocusDate,
      data: clickFocusData,
    });
  };

  return (
    <StyledSchedule>
      <Calendar focusDay={focusDay} onClickFocusDay={onClickFocusDay} />
      <FocusDay focusDay={focusDay} />
    </StyledSchedule>
  );
};

export default Schedule;
