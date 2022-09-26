import Link from 'next/link';
import { useState } from 'react';
import { mockCalendarData } from '../../../mocks/mockCalendarData';
import { StyledCalendar } from './styles';
import {
  CalendarPropsType,
  initArrType,
  newDataType,
  resultArrType,
  rowArrType,
  selectedMonthType,
  selectedMonth_firstDate_dayOfTheWeekType,
  selectedMonth_lastDateType,
  selectedNextMonthType,
  selectedNextYearType,
  selectedPrevMonthType,
  selectedPrevMonth_lastDateType,
  selectedPrevYearType,
  selectedYearType,
} from './types';

const Calendar = ({ focusDay, onClickFocusDay }: CalendarPropsType) => {
  const [selectedYear, setSelectedYear] = useState<selectedYearType>(
    new Date().getFullYear()
  );
  const [selectedMonth, setSelectedMonth] = useState<selectedMonthType>(
    new Date().getMonth() + 1
  );

  let selectedPrevYear: selectedPrevYearType;
  let selectedPrevMonth: selectedPrevMonthType;
  if (selectedMonth === 1) {
    selectedPrevYear = selectedYear - 1;
    selectedPrevMonth = 12;
  } else {
    selectedPrevYear = selectedYear;
    selectedPrevMonth = selectedMonth - 1;
  }
  const selectedPrevMonth_lastDate: selectedPrevMonth_lastDateType = new Date(
    selectedPrevYear,
    selectedPrevMonth,
    0
  ).getDate();

  const selectedMonth_firstDate_DayOfTheWeek: selectedMonth_firstDate_dayOfTheWeekType =
    new Date(selectedYear, selectedMonth - 1, 1).getDay();

  const selectedMonth_lastDate: selectedMonth_lastDateType = new Date(
    selectedYear,
    selectedMonth,
    0
  ).getDate();

  let selectedNextYear: selectedNextYearType;
  let selectedNextMonth: selectedNextMonthType;
  if (selectedMonth === 12) {
    selectedNextYear = selectedYear + 1;
    selectedNextMonth = 1;
  } else {
    selectedNextYear = selectedYear;
    selectedNextMonth = selectedMonth + 1;
  }

  const dayOfTheWeekArr = ['일', '월', '화', '수', '목', '금', '토'];

  const initArr: initArrType = Array.from({ length: 42 }, () => ({
    year: 0,
    month: 0,
    date: 0,
    dayOfTheWeek: '',
  }));

  for (let i = 0; i < selectedMonth_firstDate_DayOfTheWeek; i++) {
    initArr[i] = {
      year: selectedPrevYear,
      month: selectedPrevMonth,
      date:
        selectedPrevMonth_lastDate -
        selectedMonth_firstDate_DayOfTheWeek +
        i +
        1,
      dayOfTheWeek:
        dayOfTheWeekArr[
          new Date(
            selectedPrevYear,
            selectedPrevMonth - 1,
            selectedPrevMonth_lastDate -
              selectedMonth_firstDate_DayOfTheWeek +
              i +
              1
          ).getDay()
        ],
    };
  }

  let count = 1;
  for (
    let i = selectedMonth_firstDate_DayOfTheWeek;
    i < selectedMonth_lastDate + selectedMonth_firstDate_DayOfTheWeek;
    i++
  ) {
    initArr[i] = {
      year: selectedYear,
      month: selectedMonth,
      date: count,
      dayOfTheWeek:
        dayOfTheWeekArr[
          new Date(selectedYear, selectedMonth - 1, count).getDay()
        ],
    };
    count++;
  }

  count = 1;
  for (
    let i = selectedMonth_lastDate + selectedMonth_firstDate_DayOfTheWeek;
    i < 42;
    i++
  ) {
    initArr[i] = {
      year: selectedNextYear,
      month: selectedNextMonth,
      date: count,
      dayOfTheWeek:
        dayOfTheWeekArr[
          new Date(selectedNextYear, selectedNextMonth - 1, count).getDay()
        ],
    };
    count++;
  }

  let rowArr: rowArrType = [];
  const resultArr: resultArrType = [];
  for (let i = 0; i < 42; i++) {
    let newData: newDataType = {
      year: initArr[i].year,
      month: initArr[i].month,
      date: initArr[i].date,
      dayOfTheWeek: initArr[i].dayOfTheWeek,
    };

    if (
      initArr[i].year === focusDay.year &&
      initArr[i].month === focusDay.month &&
      initArr[i].date === focusDay.date
    ) {
      newData = {
        ...newData,
        focusDayBackgroundColor: '#82b0ac31',
      };
    } else {
      newData = {
        ...newData,
        focusDayBackgroundColor: 'white',
      };
    }

    if (i % 7 === 0) {
      newData = {
        ...newData,
        dateColor: 'red',
      };
    } else {
      newData = {
        ...newData,
        dateColor: 'black',
      };
    }

    if (initArr[i].month !== selectedMonth) {
      newData = {
        ...newData,
        dateOpacity: '0.3',
      };
    } else {
      newData = {
        ...newData,
        dateOpacity: '1',
      };
    }

    for (let k = 0; k < mockCalendarData.length; k++) {
      if (
        String(initArr[i].year) === mockCalendarData[k].year &&
        String(initArr[i].month) === mockCalendarData[k].month &&
        String(initArr[i].date) === mockCalendarData[k].date
      ) {
        newData = {
          ...newData,
          data: mockCalendarData[k].data,
        };
      }
    }
    if (!newData.data) {
      newData = {
        ...newData,
        data: [],
      };
    }

    rowArr.push(newData);

    if (rowArr.length === 7) {
      resultArr.push(rowArr);
      rowArr = [];
    }
  }

  const onPrevSelectedMonth = () => {
    if (selectedMonth === 1) {
      setSelectedYear(selectedYear - 1);
      setSelectedMonth(12);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const onNextSelectedMonth = () => {
    if (selectedMonth === 12) {
      setSelectedYear(selectedYear + 1);
      setSelectedMonth(1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  return (
    <StyledCalendar>
      <div className="calendar-title">
        <button
          className="calendar-title__button"
          onClick={onPrevSelectedMonth}
        >
          &lt;
        </button>
        <p className="calendar-title__content">
          {selectedYear}년 {selectedMonth}월
        </p>
        <button
          className="calendar-title__button"
          onClick={onNextSelectedMonth}
        >
          &gt;
        </button>
      </div>
      <table className="calendar-table">
        <thead className="calendar-table__thead">
          <tr>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
              (columnTitle) => (
                <th className="calendar-table__columnTitle" key={columnTitle}>
                  {columnTitle}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody className="calendar-table__tbody">
          {resultArr.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((day, dayIndex) => (
                <Link
                  href={`#${day.year}-${day.month}-${day.date}`}
                  key={dayIndex}
                >
                  <td
                    className="calendar-table__day"
                    onClick={() =>
                      onClickFocusDay({
                        focusYear: day.year,
                        focusMonth: day.month,
                        focusDate: day.date,
                        focusDayOfTheWeek: day.dayOfTheWeek,
                        focusData: day.data,
                      })
                    }
                    style={{
                      backgroundColor: `${day.focusDayBackgroundColor}`,
                    }}
                  >
                    <div
                      className="calendar-table__date"
                      style={{
                        color: `${day.dateColor}`,
                        opacity: `${day.dateOpacity}`,
                      }}
                    >
                      {day.date}
                    </div>
                    <div className="calendar-table__schedule">
                      {day.data &&
                        day.data.map(
                          (scheduleItem: any, scheduleItemIndex: number) => (
                            <div
                              className="calendar-table__scheduleItem"
                              key={scheduleItemIndex}
                              style={{
                                backgroundColor: `${scheduleItem.backgroundColor}`,
                                opacity: `${day.dateOpacity}`,
                              }}
                            >
                              {scheduleItem.title.length > 14
                                ? scheduleItem.title.slice(0, 14) + ' ...'
                                : scheduleItem.title}
                            </div>
                          )
                        )}
                    </div>
                  </td>
                </Link>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </StyledCalendar>
  );
};

export default Calendar;
