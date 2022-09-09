import { atom } from 'recoil';
import { recoilKeys } from './recoilKeys';

export type sidebarStateType = {
  width: number;
  isOpened: boolean;
};

export const sidebarState = atom<sidebarStateType>({
  key: recoilKeys.atom.sidebarState,
  default: {
    width: 160,
    isOpened: true,
  },
});
