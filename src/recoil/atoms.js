import { atom } from 'recoil';

export const errorState = atom({
  key: 'errors', // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});
