import React, { FC } from 'react';
import cn from 'classnames';

import { Badge } from '@site/src/components/Badge';
import { useViewportContext } from '@site/src/components/DocViewport';

import { CardProps } from './interfaces';
import styles from './card.module.scss';

export const Card: FC<CardProps> = (props) => {
  const { title, name, subtitles = [], valueComp, colorMode: extarnalColorMode } = props;

  const { colorMode: viewportColorMode } = useViewportContext();
  const colorMode = extarnalColorMode || viewportColorMode;

  return (
    <div className={cn(styles.card, styles[colorMode])}>
      {valueComp}

      <span className={styles.title}>{title.toLowerCase()}</span>

      {!!subtitles.length && (
        <div
          className={cn(styles.values, {
            [styles.values_mb]: !!name,
          })}
        >
          {subtitles.map((subtitle) => (
            <span key={subtitle}>{subtitle}</span>
          ))}
        </div>
      )}

      {!!name && <Badge colorMode={colorMode}>{name}</Badge>}
    </div>
  );
};
