import { useEffect } from 'react';
import { StyledToastItem } from './styles';
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillInfoCircle,
  AiFillWarning,
  AiOutlineClose,
} from 'react-icons/ai';

type ToastItemProps = {
  item: {
    category: 'Success' | 'Failure' | 'Warn' | 'Info';
    message: string;
    id: string;
  };
  onRemoveToastList: (id: string) => void;
};

const ToastItem = ({ item, onRemoveToastList }: ToastItemProps) => {
  useEffect(() => {
    const timeoutForRemove = setTimeout(() => {
      onRemoveToastList(item.id);
    }, 2500);

    return () => {
      clearTimeout(timeoutForRemove);
    };
  }, [item.id, onRemoveToastList]);

  return (
    <StyledToastItem category={item.category} className="toastItem">
      <span className="toastItem__categoryIcon">
        {item.category === 'Success' && <AiFillCheckCircle />}
        {item.category === 'Failure' && <AiFillCloseCircle />}
        {item.category === 'Warn' && <AiFillWarning />}
        {item.category === 'Info' && <AiFillInfoCircle />}
      </span>
      <span className="toastItem__message">
        {item.category}: {item.message}
      </span>
      <span
        className="toastItem__closeIcon"
        onClick={() => onRemoveToastList(item.id)}
      >
        <AiOutlineClose />
      </span>
    </StyledToastItem>
  );
};

export default ToastItem;
