import client from './axiosClient';
import { tokenDataTypes } from '../types/type';
export const login = async (data: {
  email: string;
  password: string;
}): Promise<tokenDataTypes> => {
  const response = await client.post('auth/login', data);
  return response.data;
};

export const githubLogin = async (data: {
  accessToken: string;
}): Promise<tokenDataTypes> => {
  const response = await client.post('/oauth/login/github', data);
  return response.data;
};
