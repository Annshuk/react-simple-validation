import React, { memo, useRef } from 'react';

import { Input } from './Input';
import { ErrorMessage } from './ErrorMessage';

const InputLabel = memo(({ label, name, value, onChange, errors, ...rest }) => {
  const inputRef = useRef(name);

  return (
    <div className="labelInput">
      <label htmlFor={name}>{label}</label>
      <Input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        ref={inputRef}
        autoComplete="off"
        {...rest}
      />
      <ErrorMessage errorFor={name} message={`${name} is required`} />
    </div>
  );
});

export { InputLabel };
