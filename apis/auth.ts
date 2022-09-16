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
  code: string;
}): Promise<tokenDataTypes> => {
  const response = await client.post('/oauth2/authorization/github', data);
  return response.data;
};
