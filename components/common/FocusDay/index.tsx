import { StyledFocusDay } from './styles';
import { FocusDayPropsType } from './type';

const FocusDay = ({ focusDay }: FocusDayPropsType) => {
  return (
    <StyledFocusDay>
      <div>
        {focusDay.year}.{focusDay.month}.{focusDay.date}
      </div>
      <div>
        {focusDay.data.map((scheduleItem: any, scheduleItemIndex: number) => (
          <div key={scheduleItemIndex}>
            <div>제목: {scheduleItem.title}</div>
            <div>내용: {scheduleItem.content}</div>
            <div>바로가기: {scheduleItem.url}</div>
          </div>
        ))}
      </div>
    </StyledFocusDay>
  );
};

export default FocusDay;
