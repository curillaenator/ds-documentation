import React, { FC, CSSProperties } from 'react';
import cn from 'classnames';

import { Badge } from '@site/src/components/Badge';
import { useViewportContext } from '@site/src/components/DocViewport';

import styles from './styles.module.scss';

interface CardProps {
  title: string;
  subtitles?: string[];
  name: string;
  valueStyle: CSSProperties;
}

export const Card: FC<CardProps> = (props) => {
  const { title, name, subtitles = [], valueStyle } = props;

  const { colorMode } = useViewportContext();

  return (
    <div className={cn(styles.card, styles[colorMode])}>
      <div className={cn(styles.colorValue)} style={valueStyle} />

      <span className={styles.title}>{title}</span>

      {subtitles.length && (
        <div className={styles.values}>
          {subtitles.map((subtitle) => (
            <span key={subtitle}>{subtitle}</span>
          ))}
        </div>
      )}

      <Badge colorMode={colorMode}>{name}</Badge>
    </div>
  );
};
