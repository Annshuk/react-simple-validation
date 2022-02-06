import React from 'react';
import { Input } from './Input';

const InputLabel = ({ label, name, value, onChange, ...rest }) => {
  console.log('sf');
  return (
    <div className="labelInput">
      <label htmlFor={name}>{label}</label>
      <Input name={name} value={value} onChange={onChange} {...rest} />
    </div>
  );
};

export { InputLabel };
