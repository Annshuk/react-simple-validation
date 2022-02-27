import React from 'react';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import FormSection from './FormSection';

import './style.css';

const App = () => {
  console.log('render first time');

  return (
    <RecoilRoot>
      <FormSection />
    </RecoilRoot>
  );
};

export default App;

/**
 * name requied
 * age - only number requied
 * submit
 * two text box,
 * young -
 * old =
 *  * display to show all list
 *
 */
