import React, { useMemo, memo } from 'react';

import { useRecoilValue } from 'recoil';
import { errorsFromFields } from './recoil/selectors';

/**
 * ErrorMessage
 * with memo so can sure only specific fields error
 */
const ErrorMessage = memo(({ message = '', errorFor = '' }) => {
  const errorFields = useRecoilValue(errorsFromFields);

  const errorField = useMemo(
    () =>
      errorFields[errorFor] ? (
        <span
          role="alert"
          aria-live="assertive"
          id={errorFor}
          className="errors"
        >
          {message}
        </span>
      ) : null,
    [errorFields]
  );

  return errorField;
});

export { ErrorMessage };
