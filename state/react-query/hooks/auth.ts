import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { login } from '../../../apis/auth';
import { useCustomToast } from '../../../common/hooks/useCustomToast';
import { userState } from '../../recoil/user';

export const UseLoginMutation = () => {
  const toast = useCustomToast();
  const setUser = useSetRecoilState(userState);

  return useMutation(
    ({ email, password }: { email: string; password: string }) =>
      login({ email, password }),
    {
      onSuccess: (data) => {
        toast({
          title: '로그인에 성공하였습니다.',
          status: 'success',
        });
        setUser({ id: data.data.userId });
      },
      onError: () => {
        toast({
          title: '로그인에 실패하였습니다.',
          status: 'error',
        });
      },
    }
  );
};
