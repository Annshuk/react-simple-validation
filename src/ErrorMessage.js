import React, { memo } from 'react';

import { useRecoilValue } from 'recoil';
import { errorsFromFields } from './recoil/selectors';

const ErrorMessage = memo(({ message, errorFor }) => {
  const errorFields = useRecoilValue(errorsFromFields);

  return errorFields[errorFor] ? (
    <span className="errors">{message} </span>
  ) : null;
});

export { ErrorMessage };
