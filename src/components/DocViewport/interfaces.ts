import { ReactNode } from 'react';

export interface DocViewportProps {
  id?: string;
  // title: string;
  // description: ReactNode;
  modes?: ('light' | 'dark' | 'color')[];
  children: ReactNode;
}
