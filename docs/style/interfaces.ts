import { CSSProperties, ReactNode } from 'react';

export interface CardProps {
  title: string;
  name: string;
  subtitles?: string[];
  valueStyle?: CSSProperties;
  valueComp?: ReactNode;
  colorMode?: 'light' | 'dark' | 'color';
}
