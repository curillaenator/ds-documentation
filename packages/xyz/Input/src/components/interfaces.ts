import type { ButtonHTMLAttributes } from 'react';
import type { IconSize, Icons } from '@kit-xyz/icon';

export interface ActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  dataTestId: string;
  size: IconSize;
  iconName: Icons;
}
