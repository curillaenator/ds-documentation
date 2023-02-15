/* eslint-disable react/prop-types */

import React, { FC } from 'react';
import cn from 'classnames';

import { icons } from './icons';
import { ColorModeToggleProps } from './interfaces';
import styles from './styles.module.scss';

const ColorModeToggle: FC<ColorModeToggleProps> = React.memo((props) => {
  const { className, value, onChange, disabled, title, modes = ['light', 'dark'] } = props;

  return (
    <div className={cn(styles.wrapper, styles[value], className)}>
      <div
        className={cn(styles.toggleButton, styles[`togleLength${modes.length}`], styles[`transition${value}`])}
        title={title}
        aria-label={title}
        aria-live='polite'
      >
        <span className={cn(styles.toggler)} />

        {modes.map((mode) => (
          <button
            key={mode}
            type='button'
            disabled={disabled}
            className={styles.iconWrapper}
            title={title}
            aria-label={title}
            aria-live='polite'
            onClick={() => onChange(mode)}
          >
            {icons[mode]}
          </button>
        ))}
      </div>
    </div>
  );
});

ColorModeToggle.displayName = 'ColorModeToggle';

export { ColorModeToggle };
