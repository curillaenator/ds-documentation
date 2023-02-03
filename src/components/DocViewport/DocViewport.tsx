import React, { FC } from 'react';
import cn from 'classnames';

import { ColorModeToggle } from '@site/src/components/ColorModeToggle';

import { useLocalColorMode } from './hooks/useLocalColorMode';

import { DocViewportProps } from './interfaces';
import styles from './styles.module.scss';

export const DocViewport: FC<DocViewportProps> = (props) => {
  const { modes = ['light', 'dark', 'color'], children } = props;

  const { localColorMode, handleLocalColorMode } = useLocalColorMode();

  return (
    <div className={cn(styles.viewport, styles[localColorMode])}>
      {!!modes.length && (
        <div className={styles.modes}>
          <ColorModeToggle value={localColorMode} onChange={handleLocalColorMode} modes={modes} />
        </div>
      )}

      {children}

      <div className={styles.interactive}></div>
    </div>
  );
};
