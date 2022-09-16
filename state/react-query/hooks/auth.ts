import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';
import {
  tokenDataTypes,
  ourLoginDataType,
  socialLoginDataType,
} from '../../../types/type';
import { useCustomToast } from '../../../common/hooks/useCustomToast';
import { userState } from '../../recoil/user';

export const UseLoginMutation = (
  logInCallback: (
    data: ourLoginDataType | socialLoginDataType
  ) => Promise<tokenDataTypes>
) => {
  const toast = useCustomToast();
  const setUser = useSetRecoilState(userState);

  return useMutation(
    (data: ourLoginDataType | socialLoginDataType) => logInCallback(data),
    {
      onSuccess: (data) => {
        // 토큰 설정
        // access는 리코일 상태에
        setUser({ accessToken: data.accessToken });
        // refresh는 쿠키에

        toast({
          title: '로그인에 성공하였습니다.',
          status: 'success',
        });
      },
      onError: (err: AxiosError) => {
        toast({
          title: err.message,
          status: 'error',
        });
      },
    }
  );
};
