import React, { memo } from 'react';

import { InputLabel } from './InputLabel';

const ShowSaved = memo(() => {
  const records = JSON.parse(sessionStorage.getItem('userInformatiion')) || [];

  const [toogle, setToggles] = React.useState(false);

  const showAll = () => {
    setToggles((prev) => !prev);
  };

  console.log('Show Saved');

  return (
    <>
      <button onClick={showAll}>
        {`${!toogle ? 'Show' : 'Hide'}`} all user
      </button>

      <InputLabel name="ausername" label="Young" readOnly />
      <InputLabel name="aage" label="Old" readOnly />

      {toogle &&
        records.map((item, index) => (
          <p key={index}>
            {item.username} , {item.age}
          </p>
        ))}
    </>
  );
});

export { ShowSaved };
