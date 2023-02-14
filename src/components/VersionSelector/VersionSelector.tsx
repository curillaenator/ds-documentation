import React, { FC, useContext, useState, useEffect, PropsWithChildren } from 'react';

import MDXContent from '@theme/MDXContent';
import { DocItemContext } from '@site/src/services/docItemContext';

interface VersionSelectorProps extends PropsWithChildren {
  versionPages: {
    version: string;
    page: unknown;
  }[];
}

export const VersionSelector: FC<VersionSelectorProps> = (props) => {
  const { versionPages, children } = props;
  const { selectedVersion } = useContext(DocItemContext);

  const [pageI, setPageI] = useState<number | null>(null);

  useEffect(() => {
    if (!selectedVersion) return;

    const pageIndex = versionPages.findIndex((v) => v.version === selectedVersion);

    if (pageIndex === -1) return;

    setPageI(pageIndex);
  }, [versionPages, selectedVersion]);

  const Doc = versionPages[pageI].page as React.ElementType;

  if (!pageI) return <MDXContent>{children}</MDXContent>;

  return <Doc />;
};
