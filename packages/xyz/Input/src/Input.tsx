import React, { forwardRef } from 'react';
import { BaseInput } from '@kit-base/input';

import { useInputProps } from './hooks/useInputProps';
import { InputProps } from './interfaces';

/**
 * Input -  {@link https://uikit.pcbltools.ru/v4.1/?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-inputs-input--inp| ссылка на документацию.}
 *
 */
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const inputProps = useInputProps(props);

  return <BaseInput {...inputProps} ref={ref} />;
});
