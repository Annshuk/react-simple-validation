import React, { useState, useRef, useCallback } from 'react';

import { InputLabel } from './InputLabel';

import './style.css';

const App = () => {
  const [fields, setUserName] = useState({
    username: '',
    age: '',
  });

  const [toogle, setToggles] = useState(false);
  const [errors, setErrors] = useState({});

  const records = useRef(
    JSON.parse(sessionStorage.getItem('userInformatiion')) || []
  );

  const handleUserChange = useCallback(({ target }) => {
    setUserName((prevState) => ({ ...prevState, [target.name]: target.value }));

    setErrors((prevState) => ({
      ...prevState,
      [target.name]: !target.value,
    }));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const hasValue = [...Object.values(fields)].every(Boolean);

    setErrors((prevState) => {
      return {
        ...prevState,
        username: !fields.username,
        age: !fields.age,
      };
    });

    if (hasValue) {
      records.current = [...records.current, fields];
      sessionStorage.setItem(
        'userInformatiion',
        JSON.stringify(records.current)
      );
    }
  };

  const showAll = () => {
    setToggles((prev) => !prev);
  };

  return (
    <>
      <form>
        <InputLabel
          name="username"
          label="Name :"
          onChange={handleUserChange}
          value={fields.username}
        />
        {errors?.username && <span className="errors">please fill</span>}
        <InputLabel
          name="age"
          type="number"
          label="Age :"
          onChange={handleUserChange}
          value={fields.age}
        />
        {errors?.age && <span className="errors">please fill</span>}
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>

      <button onClick={showAll}>
        {`${!toogle ? 'Show' : 'hide'}`} all user
      </button>

      <InputLabel name="ausername" label="Young" readOnly />
      <InputLabel name="aage" label="Old" readOnly />
      {toogle &&
        records.current.map((item, index) => (
          <p key={index}>
            {item.username} , {item.age}
          </p>
        ))}
    </>
  );
};

export default App;

/**
 * name requied
 * age - only number requied
 * submit
 * two text box,
 * young -
 * old =
 *  * display to show all list
 *
 */
