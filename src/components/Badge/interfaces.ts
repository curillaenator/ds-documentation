import { ReactNode } from 'react';

export interface BadgeProps {
  children: ReactNode;
  label?: string;
  appearance?: 'neutral' | 'primary' | 'outline';
  colorMode?: 'light' | 'dark' | 'color';
}
