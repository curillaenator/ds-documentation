import React, { forwardRef } from 'react';
import { BaseInput } from '@kit-base/input';

import { useInputProps } from './hooks/useInputProps';
import { InputProps } from './interfaces';

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const inputProps = useInputProps(props);

  return <BaseInput {...inputProps} ref={ref} />;
});
