import React, { useContext, useEffect } from 'react';

import { DocsHeaderProps } from './interfaces';

import { DocItemContext } from '@site/src/services/docItemContext';

export const HeaderMetaProvider = (props: DocsHeaderProps) => {
  const { setHeaderContext } = useContext(DocItemContext);
  useEffect(() => setHeaderContext(props), [setHeaderContext]);
  return <div style={{ display: 'none' }} />;
};
