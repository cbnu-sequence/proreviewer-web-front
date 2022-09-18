import { useState } from 'react';
import { mockCalendarData } from '../../mocks/mockCalendarData';
import { StyledSchedule } from './styles';
import {
  initArrType,
  newDataType,
  resultArrType,
  rowArrType,
  selectedMonthType,
  selectedMonth_firstDate_DayOfTheWeekType,
  selectedMonth_lastDateType,
  selectedNextMonthType,
  selectedNextYearType,
  selectedPrevMonthType,
  selectedPrevMonth_lastDateType,
  selectedPrevYearType,
  selectedYearType,
} from './type';

const Schedule = () => {
  const [selectedYear, setSelectedYear] = useState<selectedYearType>(
    new Date().getFullYear()
  );
  const [selectedMonth, setSelectedMonth] = useState<selectedMonthType>(
    new Date().getMonth() + 1
  );

  //year 년
  //month 달
  //date 일
  //dayoftheweek 요일

  // 선택한 달의 이전 달
  let selectedPrevYear: selectedPrevYearType;
  let selectedPrevMonth: selectedPrevMonthType;
  if (selectedMonth === 1) {
    selectedPrevYear = selectedYear - 1;
    selectedPrevMonth = 12;
  } else {
    selectedPrevYear = selectedYear;
    selectedPrevMonth = selectedMonth - 1;
  }
  //선택한 달의 이전 달의 마지막 날짜의 일수
  const selectedPrevMonth_lastDate: selectedPrevMonth_lastDateType = new Date(
    selectedPrevYear,
    selectedPrevMonth,
    0
  ).getDate();

  // 선택한 달의 1일 요일 //일0 월1 화2 수3 목4 금5 토6 일7
  const selectedMonth_firstDate_DayOfTheWeek: selectedMonth_firstDate_DayOfTheWeekType =
    new Date(selectedYear, selectedMonth - 1, 1).getDay();

  // 선택한 달의 마지막 날짜의 일수
  const selectedMonth_lastDate: selectedMonth_lastDateType = new Date(
    selectedYear,
    selectedMonth,
    0
  ).getDate();

  // 선택한 달의 다음 달
  let selectedNextYear: selectedNextYearType;
  let selectedNextMonth: selectedNextMonthType;
  if (selectedMonth === 12) {
    selectedNextYear = selectedYear + 1;
    selectedNextMonth = 1;
  } else {
    selectedNextYear = selectedYear;
    selectedNextMonth = selectedMonth + 1;
  }

  /* 1. 달력 날짜 넣기 시작 */
  // 1-1. 배열 42개 초기화 (1달에 날짜는 42개)
  const initArr: initArrType = [];
  for (let i = 0; i < 42; i++) {
    initArr.push({ year: 0, month: 0, date: 0 });
  }

  // 1-2. 선택한 달의 이전 달 마지막 날짜 넣기
  // 42개의 배열 인덱스0부터 ~ 선택한 달의 1일의 요일까지
  for (let i = 0; i < selectedMonth_firstDate_DayOfTheWeek; i++) {
    initArr[i] = {
      year: selectedPrevYear,
      month: selectedPrevMonth,
      date:
        selectedPrevMonth_lastDate -
        selectedMonth_firstDate_DayOfTheWeek +
        i +
        1,
    };
  }

  // 1-3. 선택한 달의 1일부터 마지막 날짜 넣기
  // 선택한 달의 1일의 요일부터 ~ 선택한 달의 마지막 날짜의 갯수만큼
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
    };
    count++;
  }

  // 1-4. 선택한 달의 다음 달 첫번째 날짜 넣기
  // 나머지 0이 있는 칸 ~ 달력의 마지막(인덱스41)까지
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
    };
    count++;
  }

  /* 2. 기존에 날짜만 들어있는 배열 -> 조건 비교하면서 데이터 넣기 */
  let rowArr: rowArrType = [];
  const resultArr: resultArrType = [];
  // 배열 42개 모두 비교하기
  for (let i = 0; i < 42; i++) {
    // 2-1. 초기화
    let newData: newDataType = {
      year: initArr[i].year,
      month: initArr[i].month,
      date: initArr[i].date,
    };

    // 2-2. 매주 일요일 (인덱스 7의 배수) 색깔 빨간색 지정
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

    // 2-3. 선택한 달이 아닌 날짜 투명도 지정
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

    // 2-4. API로 받은 data 비교하기 (해당 data가 있는 날짜만 data 넣기)
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

    // 2-5. rowArr 배열을 이용해서 한 행에 7개 날짜만 넣는 2차원 배열로 변환하기
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
    <StyledSchedule>
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
                <td key={dayIndex} className="calendar-table__day">
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
                            {scheduleItem.item.length > 14
                              ? scheduleItem.item.slice(0, 14) + ' ...'
                              : scheduleItem.item}
                          </div>
                        )
                      )}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </StyledSchedule>
  );
};

export default Schedule;
