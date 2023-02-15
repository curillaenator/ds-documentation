import React, { forwardRef } from 'react';
import cn from 'classnames';

import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import { BaseBadgeProps } from './interfaces';
import styles from './styles/badge.module.scss';

/**
 * Badge -  {@link https://uikit.pcbltools.ru/v4.1/?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-data-display-badge--badge| ссылка на документацию.}
 *
 */
export const BaseBadge = forwardRef<HTMLDivElement, BaseBadgeProps>((props, ref) => {
  const { dataTestId = DEFAULT_TEST_ID, iconLeft, iconRight, children, textSecondary, id, className, ...rest } = props;

  return (
    <span
      id={id}
      className={cn(styles.badge, className, {
        [styles._reversed]: props.reversed,
      })}
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      ref={ref}
      {...rest}
    >
      {iconLeft}

      {children && <span>{children}</span>}

      {textSecondary && <span className={styles.additional}>{textSecondary}</span>}

      {iconRight}
    </span>
  );
});
