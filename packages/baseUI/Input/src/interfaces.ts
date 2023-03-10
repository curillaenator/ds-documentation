import { InputHTMLAttributes, ReactNode, RefObject } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** ัะตัั id */
  dataTestId?: string;
  upperNode?: ReactNode;
  lowerNode?: ReactNode;
  id?: string;
  status?: string;
  nodeLeft?: ReactNode;
  nodeRight?: ReactNode;
  uncontrolled?: boolean;
  wrapperRef?: RefObject<HTMLDivElement>;
  active?: boolean;
  setActive?: (active: boolean) => void;
  contentClassName?: string;
  inputClassName?: string;
}

export interface IsOverlay {
  left: boolean;
  right: boolean;
}
