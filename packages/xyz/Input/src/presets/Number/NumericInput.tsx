import React, { FC } from 'react';

import { Input } from '../../Input';

import { NumericInputProps } from './interfaces';

export const NumericInput: FC<NumericInputProps> = ({ onChange, ...rest }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\D/g, '');
    if (onChange) {
      onChange(e);
    }
  };

  return <Input {...rest} onChange={handleInputChange} />;
};
