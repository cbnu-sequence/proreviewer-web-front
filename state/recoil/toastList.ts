import { atom } from 'recoil';
import { recoilKeys } from './recoilKeys';

export type ToastListStateType = Array<{
  category: 'Success' | 'Failure' | 'Warn' | 'Info';
  message: string;
  id: string;
}>;

export const ToastListState = atom<ToastListStateType>({
  key: recoilKeys.atom.toastListState,
  default: [],
});
