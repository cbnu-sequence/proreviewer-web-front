import { useRecoilValue } from 'recoil';
import { sidebarState } from '../../state/recoil/sidebar';
import { StyledHome } from './styles';

const Home = () => {
  const sideBar = useRecoilValue(sidebarState);

  return (
    <StyledHome isOpened={sideBar.isOpened}>
      <div className="home">홈</div>
    </StyledHome>
  );
};

export default Home;
