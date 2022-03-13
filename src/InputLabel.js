import React from 'react';

import { Input } from './Input';
import { ErrorMessage } from './ErrorMessage';

const InputLabel = ({ label, name, value, onChange, ...rest }) => {
  return (
    <div className="labelInput">
      <label htmlFor={name}>{label}</label>
      <Input name={name} value={value} onChange={onChange} {...rest} />
      <ErrorMessage errorFor={name} message={`${name} is requied`} />
    </div>
  );
};

export { InputLabel };
