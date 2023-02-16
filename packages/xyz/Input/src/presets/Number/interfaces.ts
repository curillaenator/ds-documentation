import { InputProps } from '../../interfaces';

export interface NumericInputProps extends Omit<InputProps, 'type'> {
  type?: 'text' | 'password';
}
