import React, { FC } from 'react';
import cn from 'classnames';

import { Badge } from '@site/src/components/Badge';
import { useViewportContext } from '@site/src/components/DocViewport';

import styles from './styles.module.scss';

interface CardProps {
  title: string;
  rgb: string;
  hex: string;
  name: string;
}

export const Card: FC<CardProps> = (props) => {
  const { title, rgb, hex, name } = props;

  const { colorMode } = useViewportContext();

  return (
    <div className={cn(styles.card, styles[colorMode], styles[name])}>
      <div className={cn(styles.colorValue)} />

      <span className={styles.title}>{title}</span>

      <div className={styles.values}>
        <span>{`RGB: ${rgb}`}</span>

        <span>{`HEX: ${hex}`}</span>
      </div>

      <Badge colorMode={colorMode}>{name}</Badge>
    </div>
  );
};
