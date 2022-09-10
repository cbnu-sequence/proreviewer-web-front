import { useRecoilValue } from 'recoil';
import { sidebarState } from '../../../state/recoil/sidebar';
import { StyledWrapper } from './styles';

type ComponentWrapperProps = {
  children: any;
};

const ComponentWrapper = ({ children }: ComponentWrapperProps) => {
  const sideBar = useRecoilValue(sidebarState);

  return <StyledWrapper isOpened={sideBar.isOpened}>{children}</StyledWrapper>;
};

export default ComponentWrapper;
