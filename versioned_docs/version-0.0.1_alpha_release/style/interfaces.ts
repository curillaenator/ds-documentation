import { ReactNode } from 'react';

export interface CardProps {
  valueComp: ReactNode;
  title: string;
  name: string;
  subtitles?: string[];
  colorMode?: 'light' | 'dark' | 'color';
}
