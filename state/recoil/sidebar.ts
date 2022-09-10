import { atom } from 'recoil';
import { recoilKeys } from './recoilKeys';

export type sidebarStateType = {
  isOpened: boolean;
};

export const sidebarState = atom<sidebarStateType>({
  key: recoilKeys.atom.sidebarState,
  default: {
    isOpened: true,
  },
});
