import React from 'react';
import cn from 'classnames';
import { PageMetadata, useCurrentSidebarCategory } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DocCardList from '@theme/DocCardList';
import DocPaginator from '@theme/DocPaginator';
import DocVersionBanner from '@theme/DocVersionBanner';
// import DocVersionBadge from '@theme/DocVersionBadge';
// import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import type { Props } from '@theme/DocCategoryGeneratedIndexPage';

import { DocsHeader } from '@site/src/components/DocsHeader';
import { Divider } from '@site/src/components/Divider';

import styles from './styles.module.scss';

function DocCategoryGeneratedIndexPageMetadata({ categoryGeneratedIndex }: Props): JSX.Element {
  // console.log(categoryGeneratedIndex);

  return (
    <PageMetadata
      title={categoryGeneratedIndex.title}
      description={categoryGeneratedIndex.description}
      keywords={categoryGeneratedIndex.keywords}
      // TODO `require` this?
      image={useBaseUrl(categoryGeneratedIndex.image)}
    />
  );
}

function DocCategoryGeneratedIndexPageContent({ categoryGeneratedIndex }: Props): JSX.Element {
  const category = useCurrentSidebarCategory();
  return (
    <div className={styles.generatedIndexPage}>
      <DocVersionBanner />

      {/* <DocBreadcrumbs /> */}

      {/* <DocVersionBadge /> */}

      <DocsHeader
        title={categoryGeneratedIndex.title}
        description={categoryGeneratedIndex.description}
        // hasPadding={false}
      />

      <Divider enlargeX={0} marginBottom={64} />

      <article
        className={cn(
          // 'margin-top--lg',
          styles.padding,
        )}
      >
        <DocCardList items={category.items} className={styles.list} />
      </article>

      <Divider enlargeX={0} marginBottom={0} marginTop={64} />

      <footer
        className={cn(
          // 'margin-top--lg',
          styles.padding,
        )}
      >
        <DocPaginator
          previous={categoryGeneratedIndex.navigation.previous}
          next={categoryGeneratedIndex.navigation.next}
        />
      </footer>
    </div>
  );
}

export default function DocCategoryGeneratedIndexPage(props: Props): JSX.Element {
  return (
    <>
      <DocCategoryGeneratedIndexPageMetadata {...props} />
      <DocCategoryGeneratedIndexPageContent {...props} />
    </>
  );
}
