import React, { useState, useRef } from 'react';

import { useSetRecoilState } from 'recoil';

import { InputLabel } from './InputLabel';
import { ShowSaved } from './ShowSaved';
import { ErrorMessage } from './ErrorMessage';

import { errorState } from './recoil/atoms';

import './style.css';

const intialState = {
  username: '',
  age: '',
};

const FormSection = () => {
  const [fields, setUserName] = useState(intialState);
  const setErrors = useSetRecoilState(errorState);

  const records = useRef(
    JSON.parse(sessionStorage.getItem('userInformatiion')) || []
  );

  const handleUserChange = ({ target }) => {
    setUserName((prevState) => ({ ...prevState, [target.name]: target.value }));

    setErrors((prevState) => ({
      ...prevState,
      [target.name]: !target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const hasValue = [...Object.values(fields)].every(Boolean);

    setErrors((prevState) => ({
      ...prevState,
      username: !fields.username,
      age: !fields.age,
    }));

    if (hasValue) {
      records.current = [...records.current, fields];
      setUserName(intialState);

      sessionStorage.setItem(
        'userInformatiion',
        JSON.stringify(records.current)
      );
    }
  };

  console.log('Form section render');

  return (
    <>
      <form>
        <InputLabel
          name="username"
          label="Name :"
          onChange={handleUserChange}
          value={fields.username}
        />
        <ErrorMessage errorFor="username" message="username is required" />

        <InputLabel
          name="age"
          type="number"
          label="Age :"
          onChange={handleUserChange}
          value={fields.age}
        />

        <ErrorMessage errorFor="age" message="age is required" />

        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>

      <ShowSaved />
    </>
  );
};

export default FormSection;
