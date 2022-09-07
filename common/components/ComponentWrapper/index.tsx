import { useRecoilValue } from 'recoil';
import { sidebarState } from '../../../state/recoil/sidebar';
import { StyledWrapper } from './styles';

type ComponentWrapperProps = {
  children: any;
};

const ComponentWrapper = ({ children }: ComponentWrapperProps) => {
  const sideBar = useRecoilValue(sidebarState);

  const onDragOver = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <StyledWrapper sideBar={sideBar.width} onDragOver={onDragOver}>
      {children}
    </StyledWrapper>
  );
};

export default ComponentWrapper;
