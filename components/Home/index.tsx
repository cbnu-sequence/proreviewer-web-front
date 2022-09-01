import { UsegetPostsQuery } from '../../state/react-query/hooks/auth';
import { StyledHome } from './styles';

const Home = () => {
  const { data, isLoading, isError } = UsegetPostsQuery();
  //console.log(isLoading, data, isError);
  return (
    <StyledHome>
      <div className="home">홈</div>
    </StyledHome>
  );
};

export default Home;
