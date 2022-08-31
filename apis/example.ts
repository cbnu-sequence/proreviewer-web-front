import client from './client';

// 초기 셋팅 예제 (삭제 예정)
export const Postlogin = async (email: string, password: string) => {
  console.log(999);
  return client
    .post('auth/login', { email, password })
    .then((response) => response.data);
};
