import React, { FC, CSSProperties } from 'react';

import styles from './color.module.scss';

interface ColorProps {
  style?: CSSProperties;
}

export const Color: FC<ColorProps> = (props) => {
  const { style } = props;

  return <div className={styles.colorValue} style={style} />;
};
