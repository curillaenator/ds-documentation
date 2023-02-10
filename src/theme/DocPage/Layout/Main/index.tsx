import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
// @ts-expect-error no types for import
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/DocPage/Layout/Main';

import { DocItemContext } from '@site/src/services/docItemContext';
import { DocsHeader, DocsHeaderProps } from '@site/src/components/DocsHeader';

import styles from './styles.module.scss';

export default function DocPageLayoutMain({ hiddenSidebarContainer, children }: Props): JSX.Element {
  const sidebar = useDocsSidebar();

  const [headerMeta, setHeaderMeta] = useState<DocsHeaderProps | null>(null);
  const handleHeaderMeta = useCallback((newHeaderMeta: DocsHeaderProps) => setHeaderMeta(newHeaderMeta), []);

  return (
    <main
      className={clsx(styles.docMainContainer, (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced)}
    >
      <DocItemContext.Provider
        value={{
          ...headerMeta,
          setHeaderContext: handleHeaderMeta,
        }}
      >
        <div
          className={clsx(
            // "container padding-top--md padding-bottom--lg",
            styles.docWrapper,
            // styles.docItemWrapper,
            hiddenSidebarContainer && styles.docItemWrapperEnhanced,
          )}
        >
          <DocsHeader {...headerMeta} />

          {children}
        </div>
      </DocItemContext.Provider>
    </main>
  );
}
