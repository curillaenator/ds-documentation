import React, { FC, CSSProperties } from 'react';

import styles from './opacity.module.scss';

interface OpactityProps {
  backgroundImage: string;
  style?: CSSProperties;
}

export const Opacity: FC<OpactityProps> = (props) => {
  const { backgroundImage, style } = props;

  return (
    <div className={styles.opacity} style={style}>
      <img src={backgroundImage} />
    </div>
  );
};
