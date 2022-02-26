import React, { memo } from 'react';

import { InputLabel } from './InputLabel';

const ShowSaved = memo(() => {
  const records = JSON.parse(sessionStorage.getItem('userInformatiion')) || [];

  const [toogle, setToggles] = React.useState(false);

  const showAll = () => {
    setToggles((show) => !show);
  };

  console.log('Show Saved');

  return (
    <div style={{ marginTop: '10px' }}>
      <button onClick={showAll}>
        {`${!toogle ? 'Show' : 'Hide'}`} all user
      </button>

      {toogle && (
        <div style={{ marginTop: '10px' }}>
          {records.map(({ username, age }, index) => (
            <label key={index}>
              <InputLabel
                name="userName"
                label="User Name"
                readOnly
                value={username}
              />
              <InputLabel name="age" label="Age" readOnly value={age} />
            </label>
          ))}
        </div>
      )}
    </div>
  );
});

export { ShowSaved };
