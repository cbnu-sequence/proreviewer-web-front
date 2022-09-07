import { atom } from 'recoil';
import { recoilKeys } from './recoilKeys';

export type sidebarStateType = {
  width: number;
};

export const sidebarState = atom<sidebarStateType>({
  key: recoilKeys.atom.sidebarState,
  default: {
    width: 160,
  },
});
