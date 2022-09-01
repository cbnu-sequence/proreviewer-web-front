import { atom } from 'recoil';

export interface postState {
  data: any;
}

export const postState = atom<postState>({
  key: 'postState ',
  default: {
    data: null,
  },
});
