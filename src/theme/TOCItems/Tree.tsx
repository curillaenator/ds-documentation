import React from 'react';
import cn from 'classnames';
import { Link } from 'react-scroll';

import type { Props } from '@theme/TOCItems/Tree';

import styles from './styles.module.scss';

// Recursive component rendering the toc tree
function TOCItemTree({ toc, className, linkClassName, isChild }: Props): JSX.Element | null {
  if (!toc.length) {
    return null;
  }

  return (
    <ul className={isChild ? undefined : className}>
      {toc.map((heading) => (
        <li key={heading.id}>
          <Link
            href={`#${heading.id}`}
            className={cn(linkClassName ?? undefined, styles.tocItemLink)}
            // activeClass={cn(activeCn)}
            to={heading.id}
            spy={false}
            smooth={true}
            duration={500}
            offset={-172}
            // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: heading.value }}
          />

          {/* <a
            href={`#${heading.id}`}
            className={cn(linkClassName ?? undefined, styles.tocItemLink)}
            // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: heading.value }}
          /> */}
          <TOCItemTree isChild toc={heading.children} className={className} linkClassName={linkClassName} />
        </li>
      ))}
    </ul>
  );
}

// Memo only the tree root is enough
export default React.memo(TOCItemTree);
