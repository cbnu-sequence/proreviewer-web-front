import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { getPost } from '../../../apis/example';
import { postState } from '../../recoil/post';
import { queryKeys } from '../queryKeys';

export const UsegetPostsQuery = () => {
  const setPostState = useSetRecoilState<postState>(postState);

  return useQuery(queryKeys.data, () => getPost(), {
    onSuccess(data) {
      setPostState({ data: data.title });
    },
    onError(error: any) {
      switch (error.response.status) {
        case 404:
          alert('클라이언트 오류');
          break;
        default:
          console.log('오류 발생');
      }
    },
  });
};
