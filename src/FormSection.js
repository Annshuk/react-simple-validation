import React from 'react';

import { useFormHandle } from './useFormHandle';
import { InputLabel } from './InputLabel';
import { ShowSaved } from './ShowSaved';

import './style.css';

/**
 * FormSection
 * form fields
 */
const FormSection = () => {
  const { onChange, onSubmit, fields, errors } = useFormHandle();

  return (
    <>
      <form>
        <InputLabel
          name="username"
          label="Name :"
          onChange={onChange}
          value={fields.username}
        />

        <InputLabel
          name="age"
          type="number"
          label="Age :"
          onChange={onChange}
          value={fields.age}
        />

        <br />
        <button onClick={onSubmit}>Submit</button>
      </form>

      <ShowSaved />
    </>
  );
};

export default FormSection;
