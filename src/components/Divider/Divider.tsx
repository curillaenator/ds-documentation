import React, { FC, CSSProperties } from 'react';
import cn from 'classnames';
import { useColorMode } from '@docusaurus/theme-common';

import { DividerProps } from './interfaces';
import styles from './styles.module.scss';

export const Divider: FC<DividerProps> = (props) => {
  const { enlargeX = 64, marginTop = 64, marginBottom = 128 } = props;
  const { colorMode } = useColorMode();

  const enlargeStyles: CSSProperties = enlargeX
    ? {
        width: `calc(100% + ${enlargeX * 2}px)`,
        transform: `translateX(-${enlargeX}px)`,
      }
    : {};

  const marginStyles: CSSProperties = {
    marginTop,
    marginBottom,
  };

  return <div className={cn(styles.divider, styles[colorMode])} style={{ ...enlargeStyles, ...marginStyles }} />;
};
