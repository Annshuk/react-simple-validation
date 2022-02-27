import { useMemo } from 'react';
import { nanoid } from 'nanoid';

const useUniqueId = () => {
  const uniqueId = useMemo(() => nanoid(), []);

  return (suffix) => `${uniqueId}_${suffix}`;
};

export default useUniqueId;
