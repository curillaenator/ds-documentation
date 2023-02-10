import React, { FC } from 'react';

import styles from './colormatrix.module.scss';
import { COLOR_MATRIX } from '../constants';

export const ColorMatrix: FC = () => (
  <div className={styles.container}>
    {COLOR_MATRIX.flat().map((color, i) => (
      <div key={`${color}-${i}`} className={styles.tile} style={{ backgroundColor: color }} />
    ))}
  </div>
);
