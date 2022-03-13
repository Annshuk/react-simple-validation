import { useState, useRef, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import { errorState } from './recoil/atoms';

const intialState = {
  username: '',
  age: '',
};

const useFormHandle = () => {
  const [fields, setFields] = useState(intialState);
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
    setFields((prevState) => ({ ...prevState, [target.name]: value }));

    setErrors((prevState) => ({
      ...prevState,
      [target.name]: !value,
    }));
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    const hasValue = [...Object.values(fields)].every(Boolean);

    setErrors((prevState) => ({
      ...prevState,
      username: !fields.username,
      age: !fields.age,
    }));

    if (hasValue) {
      records.current = [...records.current, fields];
      setFields(intialState);

      sessionStorage.setItem(
        'userInformatiion',
        JSON.stringify(records.current)
      );
    }
  };

  return {
    onChange: handleInputChange,
    onSubmit,
    fields,
  };
};

export { useFormHandle };
