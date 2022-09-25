import { client } from './client';

export const requestInterceptor = (accessToken: string) => {
  client.interceptors.request.use(
    function (config: any) {
      config.headers.Authrozation = accessToken;
      return config;
    }
    //function (error: any) {
    // Do something with request error
    //return Promise.reject(error);
    //}
  );
};
