import React, { forwardRef } from 'react';

const Input = forwardRef(
  ({ name, type = 'text', onChange, value, required, ...rest }, ref) => (
    <input
      ref={ref}
      type={type}
      name={name}
      required={required}
      onChange={onChange}
      value={value}
      {...rest}
    />
  )
);

export { Input };
