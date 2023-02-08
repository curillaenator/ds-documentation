import { createContext } from 'react';

import { DocsHeaderProps } from '@site/src/components/DocsHeader';

interface ContextType extends Partial<DocsHeaderProps> {
  setHeaderContext?: (docsMeta: DocsHeaderProps) => void;
}

export const DocItemContext = createContext<ContextType>({});
