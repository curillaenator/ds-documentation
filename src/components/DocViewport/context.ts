import { createContext } from 'react';

type ViewportContextType = {
  colorMode: 'light' | 'dark' | 'color';
};

export const ViewportContext = createContext<ViewportContextType>({
  colorMode: 'light',
});
