import { PolymorphicComponentWithRef } from '@kit-base/common-types';
import { FC, ReactNode } from 'react';

export interface ButtonSharedProps {
  dataTestId?: string;
  className?: string;
  children?: ReactNode;
  textSecondary?: string;
  textRevers?: boolean;
  iconLeft?: ReturnType<FC>;
  iconLeftClassName?: string;
  iconRight?: ReturnType<FC>;
  iconRightClassName?: string;
  fullWidth?: boolean;
}

export interface ButtonInternalProps {
  elevated?: boolean;
  interactive?: boolean;
}

export interface ButtonProps extends ButtonInternalProps, ButtonSharedProps {}

export interface ButtonLoadingProps {
  loading?: boolean;
  loadingMessage?: string;
  loadingIcon?: ReturnType<FC>;
}

export interface ButtonDisabledProps {
  disabled?: boolean;
}

export type ButtonComponent = PolymorphicComponentWithRef<ButtonProps, 'component', 'button'>;
