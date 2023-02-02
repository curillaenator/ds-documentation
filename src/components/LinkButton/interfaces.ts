import { LinkHTMLAttributes } from 'react';

export interface LinkButtonProps extends LinkHTMLAttributes<HTMLLinkElement> {
  icon?: string;
  appearance?: 'primary' | 'outline';
}
