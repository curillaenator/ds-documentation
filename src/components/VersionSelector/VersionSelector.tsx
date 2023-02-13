import React, { FC, useContext, useState, useEffect } from 'react';

// import MDXContent from '@theme/MDXContent';
import { DocItemContext } from '@site/src/services/docItemContext';

interface VersionSelectorProps {
  versionPages: {
    version: string;
    page: unknown;
  }[];
}

export const VersionSelector: FC<VersionSelectorProps> = (props) => {
  const { versionPages } = props;
  const { selectedVersion } = useContext(DocItemContext);

  const [pageI, setPageI] = useState<number>(0);

  useEffect(() => {
    if (!selectedVersion) return;

    const pageIndex = versionPages.findIndex((v) => v.version === selectedVersion);

    if (pageIndex === -1) return;

    setPageI(pageIndex);
  }, [versionPages, selectedVersion]);

  const Doc = versionPages[pageI].page as React.ElementType;

  return <Doc />;
};
