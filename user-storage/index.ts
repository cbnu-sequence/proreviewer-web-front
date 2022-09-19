import cookie from 'js-cookie';

const COOKIE_EXPIRES_HOUR = 2;

const COOKIE_EXPIRES = COOKIE_EXPIRES_HOUR / 24;

export const setCookie = (name: string, value: string) => {
  cookie.set(name, value, { expires: COOKIE_EXPIRES });
};

export const getCookie = (name: string) => cookie.get(name);
