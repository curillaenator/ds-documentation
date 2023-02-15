import React, { forwardRef } from 'react';
import { BaseBadge } from '@kit-base/badge';
import cns from 'classnames';

import { DEFAULT_TEST_ID } from './constants';
import { BadgeProps } from './interfaces';
import { useBadgeProps } from './hooks/useBadgeProps';
import { useBadgeIcons } from './hooks/useBadgeIcons';
import styles from './styles/badge.module.scss';

export const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const { className, ...rest } = useBadgeProps(props);
  const propsWithIcons = useBadgeIcons(rest);

  const classes = cns(styles.badge, className, {
    [styles._circular]: props.shape === 'circular',
    [styles._elevated]: props.variant === 'elevate',
    [styles._outlined]: props.variant === 'ghost-outline',
  });

  return (
    <BaseBadge {...propsWithIcons} dataTestId={props.dataTestId || DEFAULT_TEST_ID} className={classes} ref={ref} />
  );
});
