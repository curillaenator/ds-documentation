import { useContext, useEffect } from 'react';

import { DocsHeaderProps } from './interfaces';

import { DocItemContext } from '@site/src/services/docItemContext';

export const HeaderMetaProvider = (props: DocsHeaderProps) => {
  const { setHeaderContext = () => {} } = useContext(DocItemContext);

  // не добавлять props в зависимости, приводит к бесконечному рендеру
  useEffect(() => setHeaderContext(props), [setHeaderContext]);
  return null;
};
