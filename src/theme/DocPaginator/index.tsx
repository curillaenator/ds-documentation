import React from 'react';
import cn from 'classnames';
import Translate, { translate } from '@docusaurus/Translate';
import PaginatorNavLink from '@theme/PaginatorNavLink';
import type { Props } from '@theme/DocPaginator';

import styles from './styles.module.scss';

export default function DocPaginator(props: Props): JSX.Element {
  const { previous, next } = props;
  return (
    <nav
      className={cn('pagination-nav docusaurus-mt-lg', styles.paginator)}
      aria-label={translate({
        id: 'theme.docs.paginator.navAriaLabel',
        message: 'Docs pages navigation',
        description: 'The ARIA label for the docs pagination',
      })}
    >
      {previous && (
        <PaginatorNavLink
          {...previous}
          subLabel={
            <Translate id='theme.docs.paginator.previous' description='The label used to navigate to the previous doc'>
              Previous
            </Translate>
          }
        />
      )}
      {next && (
        <PaginatorNavLink
          {...next}
          subLabel={
            <Translate id='theme.docs.paginator.next' description='The label used to navigate to the next doc'>
              Next
            </Translate>
          }
          isNext
        />
      )}
    </nav>
  );
}
