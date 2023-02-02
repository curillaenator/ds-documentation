import { ReactNode } from 'react';

export interface DocBlockProps {
  id?: string;
  title: string;
  description: ReactNode;
  modes?: ('light' | 'dark' | 'color')[];
  children: ReactNode;
}
