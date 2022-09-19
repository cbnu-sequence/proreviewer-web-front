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
    dayOfTheWeek: '',
    data: [],
  });

  useEffect(() => {
    //(API 요청 - 수정 필요) 처음에 오늘 날짜의 데이터 받아오기
    const dayOfTheWeekArr = ['일', '월', '화', '수', '목', '금', '토'];

    setFocusDay({
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      date: new Date().getDate(),
      dayOfTheWeek: dayOfTheWeekArr[new Date().getDay()],
      data: [],
    });
  }, []);

  const onClickFocusDay: onClickFocusDayType = ({
    clickFocusYear,
    clickFocusMonth,
    clickFocusDate,
    clickFocusDayOfTheWeek,
    clickFocusData,
  }) => {
    setFocusDay({
      year: clickFocusYear,
      month: clickFocusMonth,
      date: clickFocusDate,
      dayOfTheWeek: clickFocusDayOfTheWeek,
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
