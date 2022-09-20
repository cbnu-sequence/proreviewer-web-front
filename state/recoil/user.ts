import { atom } from 'recoil';
import { recoilKeys } from './recoilKeys';

export type userStateType = {
  id?: string;
  accessToken?: string;
};

export const userState = atom<userStateType>({
  key: recoilKeys.atom.userState,
  default: {},
});
