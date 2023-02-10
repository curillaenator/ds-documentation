import React, { FC } from 'react';
import cn from 'classnames';

import { useViewportContext } from '@site/src/components/DocViewport';

import styles from './colormatrix.module.scss';
import { ColorMatrixProps } from './interfaces';

export const ColorMatrix: FC<ColorMatrixProps> = (props) => {
  const { colorMatrix, dotsPositions, colorMode: externalColorMode, tileHeight = 34, mb = 0, type = 'matrix' } = props;

  const { colorMode: viewportColorMode } = useViewportContext();
  const colorMode = externalColorMode || viewportColorMode;

  return (
    <div className={cn(styles.container, styles[colorMode], styles[`container_${type}`])} style={{ marginBottom: mb }}>
      {colorMatrix.map((color, i) => {
        const { x, y } = color.position;

        return (
          <div
            key={`${color}-${i}`}
            className={styles.tile}
            style={{ backgroundColor: color.value, height: tileHeight }}
          >
            <div
              className={cn(styles.dot, styles[`dot_${type}`], {
                [styles.dot_visible]: dotsPositions.includes(`${x}_${y}`),
              })}
            />
          </div>
        );
      })}
    </div>
  );
};
