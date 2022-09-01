import client from './axiosClient';

// 초기 셋팅 예제 (전체 삭제 예정)
export const Postlogin = async (email: string, password: string) => {
  console.log('api');
  const response = await client.post('auth/login', { email, password });
  return response.data;
};

export const getPost = async () => {
  const response = await client.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  );
  return response.data;
};
