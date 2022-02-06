import React from 'react';

const Input = ({ name, type = 'text', onChange, value, required, ...rest }) => (
  <input
    type={type}
    name={name}
    required={required}
    onChange={onChange}
    value={value}
    {...rest}
  />
);

export { Input };
