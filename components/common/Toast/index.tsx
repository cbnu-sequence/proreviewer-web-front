import { useRecoilState } from 'recoil';
import { ToastListState } from '../../../state/recoil/toastList';
import { StyledToast } from './styles';
import ToastItem from './ToastItem';

const Toast = () => {
  const [toastList, setToastList] = useRecoilState(ToastListState);

  const onRemoveToastList = (id: string) => {
    setToastList(toastList.filter((item) => item.id !== id));
  };

  return (
    <StyledToast>
      {toastList.map((item) => (
        <ToastItem
          item={item}
          key={item.id}
          onRemoveToastList={onRemoveToastList}
        />
      ))}
    </StyledToast>
  );
};

export default Toast;
