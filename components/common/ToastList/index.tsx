import { useRecoilState } from 'recoil';
import { ToastListState } from '../../../state/recoil/toastList';
import { StyledToastList } from './styles';
import ToastItem from './ToastItem';

const ToastList = () => {
  const [toastList, setToastList] = useRecoilState(ToastListState);

  const onRemoveToastList = (id: string) => {
    setToastList(toastList.filter((item) => item.id !== id));
  };

  return (
    <StyledToastList>
      {toastList.map((item) => (
        <ToastItem
          item={item}
          key={item.id}
          onRemoveToastList={onRemoveToastList}
        />
      ))}
    </StyledToastList>
  );
};

export default ToastList;
