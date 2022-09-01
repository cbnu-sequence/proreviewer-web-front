import { atom } from 'recoil';
import { recoilKeys } from './recoilKeys';

export interface postState {
  data: any;
}

export const postState = atom<postState>({
  key: recoilKeys.atom.postState,
  default: {
    data: null,
  },
});
