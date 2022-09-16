import { AxiosError } from 'axios';
import { useMutation, UseMutationResult } from 'react-query';
import { githubLogin, login } from '../../../apis/auth';
import { LOGIN_METHOD } from '../../../constants/login';

import {
  tokenDataTypes,
  ourLoginDataType,
  socialLoginDataType,
} from '../../../types/type';

export function UseLoginMutation(method: string): UseMutationResult {
  let logInCallback: (
    data: ourLoginDataType | socialLoginDataType
  ) => Promise<tokenDataTypes> = login;
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
    onError: (err: AxiosError) => {
      console.log(err.message);
    },
  });
}
