import { tokenDataTypes } from '../state/react-query/hooks/types/auth';
import { client } from './axiosClient/client';

export const login = async (data: {
  email: string;
  password: string;
}): Promise<tokenDataTypes> => {
  const response = await client.post('auth/login', data);
  return response.data;
};

export const githubLogin = async (data: {
  code: string;
}): Promise<tokenDataTypes> => {
  const response = await client.post('/auth/login/github', data);
  return response.data;
};

export const googleLogin = async (data: {
  code: string;
}): Promise<tokenDataTypes> => {
  const response = await client.post('/auth/login/google', data);
  return response.data;
};
