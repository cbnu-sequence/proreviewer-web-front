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
    const today = new Date();

    setFocusDay({
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      date: today.getDate(),
      dayOfTheWeek: dayOfTheWeekArr[today.getDay()],
      data: [],
    });
  }, []);

  const onClickFocusDay: onClickFocusDayType = ({
    focusYear,
    focusMonth,
    focusDate,
    focusDayOfTheWeek,
    focusData,
  }) => {
    setFocusDay({
      year: focusYear,
      month: focusMonth,
      date: focusDate,
      dayOfTheWeek: focusDayOfTheWeek,
      data: focusData,
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
