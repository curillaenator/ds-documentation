import React, { FC } from 'react';
import cn from 'classnames';

import styles from './opacities.module.scss';
import { OpacitiesProps } from './interfaces';

export const OPACITIES = new Array(26).fill(100).map((el, i) => el - i * 4);

export const Opacities: FC<OpacitiesProps> = (props) => {
  const { color, blendMode = 'normal' } = props;

  return (
    <div className={cn(styles.opacities)}>
      {OPACITIES.map((opacity) => (
        <div key={`opacity-${opacity}`} className={styles.opacity}>
          <div
            className={styles.value}
            style={{
              backgroundColor: color,
              opacity: `${opacity / 100}`,
              mixBlendMode: blendMode,
            }}
          />
          <span className={styles.title}>{String(opacity)}</span>
        </div>
      ))}
    </div>
  );
};
