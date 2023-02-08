import { createContext, ReactNode } from 'react';

type ViewportContextType = {
  colorMode: 'light' | 'dark' | 'color';

  codeBlock?: ReactNode;
  selectCodeBlock?: (codeBlock: ReactNode) => void;
};

export const ViewportContext = createContext<ViewportContextType>({
  colorMode: 'light',

  codeBlock: '',
  selectCodeBlock: () => {},
});
