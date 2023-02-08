import React, { FC } from 'react';
import cn from 'classnames';
import { useColorMode } from '@docusaurus/theme-common';

import { BadgeProps } from './interfaces';
import styles from './styles.module.scss';

export const Badge: FC<BadgeProps> = (props) => {
  const { label, appearance = 'neutral', children, colorMode: cMode } = props;

  const { colorMode } = useColorMode();

  return (
    <span className={cn(styles.badgeWrapper, styles[cMode || colorMode])}>
      {label && <span className={styles.label}>{label}</span>}

      <span className={cn(styles.badge, styles[appearance])}>{children}</span>
    </span>
  );
};
