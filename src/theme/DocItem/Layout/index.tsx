import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import { useWindowSize } from '@docusaurus/theme-common';
// @ts-expect-error no types for import
import { useDoc } from '@docusaurus/theme-common/internal';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
// import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
// import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import type { Props } from '@theme/DocItem/Layout';

import { DocItemContext } from '@site/src/services/docItemContext';
import { DocsHeader, DocsHeaderProps } from '@site/src/components/DocsHeader';

import styles from './styles.module.scss';

// Decide if the toc should be rendered, on mobile or desktop viewports
function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();

  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;

  const mobile = canRender ? <DocItemTOCMobile /> : undefined;

  const desktop = canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? <DocItemTOCDesktop /> : undefined;

  return {
    hidden,
    mobile,
    desktop,
    frontMatter,
  };
}

export default function DocItemLayout({ children }: Props): JSX.Element {
  const { hidden, mobile, desktop } = useDocTOC();

  const [headerMeta, setHeaderMeta] = useState<DocsHeaderProps | null>(null);
  const [selectedVersion, setSelectedVersion] = useState<string>('');

  const handleHeaderMeta = useCallback((newHeaderMeta: DocsHeaderProps) => setHeaderMeta(newHeaderMeta), []);
  const handleSelectedVersion = useCallback((newVersion: string) => setSelectedVersion(newVersion), []);

  return (
    <DocItemContext.Provider
      value={{
        ...headerMeta,
        selectedVersion,
        setSelectedVersion: handleSelectedVersion,
        setHeaderContext: handleHeaderMeta,
      }}
    >
      <DocVersionBanner />

      <DocsHeader {...headerMeta} />

      <div className={cn('row', styles.docItemRow)}>
        <div className={cn('col', !hidden && styles.docItemCol)}>
          <div className={styles.docItemContainer}>
            <article>
              {/* <DocBreadcrumbs /> */}

              {/* <DocVersionBadge /> */}

              {mobile}

              <DocItemContent>{children}</DocItemContent>

              <DocItemFooter />
            </article>

            <DocItemPaginator />
          </div>
        </div>

        {desktop && <div className={cn('col col--2', styles.tocBorder)}>{desktop}</div>}
      </div>
    </DocItemContext.Provider>
  );
}
