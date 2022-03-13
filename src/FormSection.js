import React, { useState, useRef, useCallback } from 'react';

import { useSetRecoilState } from 'recoil';

import { InputLabel } from './InputLabel';
import { ShowSaved } from './ShowSaved';

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

  /**
   * handleInputChange
   * this callback will render only specific field
   * on change
   */
  const handleInputChange = useCallback(({ target }) => {
    const value = target.value;
    setUserName((prevState) => ({ ...prevState, [target.name]: value }));

    setErrors((prevState) => ({
      ...prevState,
      [target.name]: !value,
    }));
  }, []);

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

  return (
    <>
      <form>
        <InputLabel
          name="username"
          label="Name :"
          onChange={handleInputChange}
          value={fields.username}
        />

        <InputLabel
          name="age"
          type="number"
          label="Age :"
          onChange={handleInputChange}
          value={fields.age}
        />

        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>

      <ShowSaved />
    </>
  );
};

export default FormSection;
