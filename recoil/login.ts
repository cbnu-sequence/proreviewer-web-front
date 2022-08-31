import { atom } from 'recoil';

export interface loginState {
  email: string;
  password: string;
  isError: boolean;
  isLoading: boolean;
  data: any | null;
  isSubmit: boolean;
}

export const loginState = atom<loginState>({
  key: 'loginState',
  default: {
    email: '',
    password: '',
    isError: false,
    isLoading: false,
    data: null,
    isSubmit: false,
  },
});

/*
export const Uselogin = () =>
  useRecoilTransaction_UNSTABLE(({ get, set }) => async () => {
    const state = get(loginState);
    try {
      set(loginState, { ...state, isLoading: false });
      const response = await Postlogin(state.email, state.password); // api 요청
      set(loginState, { ...state, isLoading: false, data: response.data });
      console.log(123);
    } catch (e: any) {
      console.log(e.response);
      set(loginState, { ...state, isLoading: true, isError: true });
      console.log(state);
    }
  });
*/
