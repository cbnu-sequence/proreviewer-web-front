import { SetStateAction, useState } from 'react';

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (e: { target: { value: SetStateAction<string> } }): void => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
};
