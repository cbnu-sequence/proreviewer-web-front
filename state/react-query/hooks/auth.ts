import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useMutation, UseMutationResult } from 'react-query';
import uuid from 'react-uuid';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { githubLogin, login } from '../../../apis/auth';
import { LOGIN_METHOD } from '../../../constants/login';
import { setCookie } from '../../../cookie/user-storage';

import {
  tokenDataTypes,
  ourLoginDataType,
  socialLoginDataType,
} from '../../../types/type';

import { ToastListState } from '../../recoil/toastList';
import { userState } from '../../recoil/user';

export default function UseLoginMutation(method: string): UseMutationResult {
  let logInCallback: (
    data: ourLoginDataType | socialLoginDataType
  ) => Promise<tokenDataTypes> = login;
  const router = useRouter();
  const [toast, setToast] = useRecoilState(ToastListState);
  const setUser = useSetRecoilState(userState);
  switch (method) {
    case LOGIN_METHOD.GITHUB:
      logInCallback = githubLogin;
      break;
    case LOGIN_METHOD.SELF:
      logInCallback = login;
      break;
    default:
      break;
  }
  return useMutation(logInCallback, {
    onSuccess: (data: tokenDataTypes) => {
      // access는 리코일 상태에
      setUser({ accessToken: data.accessToken });
      // refresh는 쿠키에
      setCookie('refresh', data.refreshToken);
      router.push('/');
      setToast([
        { category: 'Success', message: '로그인에 성공했습니다!', id: uuid() },
        ...toast,
      ]);
    },
    onError: (err: AxiosError) => {
      console.log(err.message);
    },
    retry: 2,
    retryDelay: 3,
  });
}
