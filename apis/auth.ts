import client from './axiosClient';

export const login = async (data: { email: string; password: string }) => {
  const response = await client.post('auth/login', data);
  return response.data;
};
