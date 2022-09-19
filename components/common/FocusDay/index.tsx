import { StyledFocusDay } from './styles';
import { FocusDayPropsType } from './types';
import { FiEdit2 } from 'react-icons/fi';
import { IoAddCircle, IoClose } from 'react-icons/io5';

const FocusDay = ({ focusDay }: FocusDayPropsType) => {
  //            <div>바로가기: {scheduleItem.url}</div>
  return (
    <StyledFocusDay className="focusday">
      <div className="focusday__header">
        <span className="focusday__date">
          {focusDay.year}.{focusDay.month}.{focusDay.date}
        </span>
        <button className="focusday__button focusday__addBtn">
          <IoAddCircle />
        </button>
      </div>
      <div>
        {focusDay.data.map((scheduleItem: any, scheduleItemIndex: number) => (
          <div
            className="focusday__scheduleItem"
            key={scheduleItemIndex}
            style={{
              backgroundColor: `${scheduleItem.backgroundColor}`,
            }}
          >
            <div className="focusday__title">{scheduleItem.title}</div>
            <div className="focusday__content">{scheduleItem.content}</div>
            <button className="focusday__button focusday__editBtn">
              <FiEdit2 />
            </button>
            <button className="focusday__button focusday__deleteBtn">
              <IoClose />
            </button>
          </div>
        ))}
      </div>
    </StyledFocusDay>
  );
};

export default FocusDay;
