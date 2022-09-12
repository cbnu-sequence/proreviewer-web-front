import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { login } from '../../../apis/auth';
import { userState } from '../../recoil/user';

export const UseLoginMutation = () => {
  const setUser = useSetRecoilState(userState);

  return useMutation(
    ({ email, password }: { email: string; password: string }) =>
      login({ email, password }),
    {
      onSuccess: (data) => {
        console.log('로그인 성공');
        setUser({ id: data.data.userId });
      },
      onError: () => {
        console.log('로그인 실패');
      },
    }
  );
};
