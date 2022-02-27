import React, { useMemo, memo } from 'react';

import { useRecoilValue } from 'recoil';
import { errorsFromFields } from './recoil/selectors';

const ErrorMessage = memo(({ message = '', errorFor = '' }) => {
  const errorFields = useRecoilValue(errorsFromFields);

  const errorField = useMemo(
    () =>
      errorFields[errorFor] ? <span className="errors">{message} </span> : null,
    [errorFields]
  );

  console.log(errorFields);

  return errorField;
});

export { ErrorMessage };
