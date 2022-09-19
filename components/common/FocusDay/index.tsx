import { StyledFocusDay } from './styles';
import { FocusDayPropsType } from './types';
import { IoAddCircle } from 'react-icons/io5';
import { HiOutlineLink } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import Link from 'next/link';

const FocusDay = ({ focusDay }: FocusDayPropsType) => {
  //            <div>바로가기: {scheduleItem.url}</div>
  return (
    <StyledFocusDay
      className="focusday"
      id={`${focusDay.year}-${focusDay.month}-${focusDay.date}`}
    >
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
            {scheduleItem.url && (
              <Link href={scheduleItem.url}>
                <button className="focusday__button focusday__urlBtn">
                  <HiOutlineLink />
                </button>
              </Link>
            )}
            <button className="focusday__button focusday__editBtn">
              <MdOutlineModeEditOutline />
            </button>
            <button className="focusday__button focusday__deleteBtn">
              <AiOutlineClose />
            </button>
          </div>
        ))}
      </div>
    </StyledFocusDay>
  );
};

export default FocusDay;
