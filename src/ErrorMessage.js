import React, { useMemo, memo } from 'react';

import { useRecoilValue } from 'recoil';
import { errorsFromFields } from './recoil/selectors';

const ErrorMessage = ({ message = '', errorFor = '' }) => {
  const errorFields = useRecoilValue(errorsFromFields);

  const errorField = useMemo(
    () =>
      errorFields[errorFor] ? <span className="errors">{message} </span> : null,
    [errorFields]
  );

  console.log('error', errorFor);

  return errorField;
};

export { ErrorMessage };
