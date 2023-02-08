import { ReactNode } from 'react';
import { Props } from '@theme/CodeBlock';

export interface DocViewportProps {
  id?: string;
  modes?: ('light' | 'dark' | 'color')[];
  children: ReactNode;

  // codeblock
  codeBlock?: ReactNode;
  language?: Props['language'];
}
