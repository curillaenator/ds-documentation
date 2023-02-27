import type { ButtonHTMLAttributes } from 'react';
import type { ButtonDisabledProps, ButtonLoadingProps } from '@kit-base/button';

import type { ButtonProps as BaseButtonProps } from '../../interfaces';

export interface ButtonProps
  extends BaseButtonProps,
    ButtonDisabledProps,
    Omit<ButtonLoadingProps, 'loadingIcon'>,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}
