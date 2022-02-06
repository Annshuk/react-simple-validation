import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const times = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(times);
    };
  }, [count]);

  return <>{count}</>;
};

export { Counter };
