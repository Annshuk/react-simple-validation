import { selector } from 'recoil';

import { errorState } from './atoms';

export const errorsFromFields = selector({
  key: 'selectErrors', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => get(errorState),
});
