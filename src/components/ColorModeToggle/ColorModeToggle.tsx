/* eslint-disable react/prop-types */

import React, { FC, useCallback } from 'react';
import cn from 'classnames';
import { icons } from './icons';

import { ColorModeToggleProps } from './interfaces';
import styles from './styles.module.scss';

const ColorModeToggle: FC<ColorModeToggleProps> = React.memo((props) => {
  const { className, value, onChange, disabled, title, modes = ['light', 'dark'] } = props;

  const handleChange = useCallback(() => {
    const cur = modes.findIndex((m) => m === value);

    if (cur === modes.length - 1) {
      onChange(modes[0]);
      return;
    }

    onChange(modes[cur + 1]);
  }, [value, modes, onChange]);

  return (
    <div className={cn(styles.wrapper, styles[value], className)}>
      <button
        className={cn(styles.toggleButton, styles[`togleLength${modes.length}`], styles[`transition${value}`])}
        type='button'
        onClick={handleChange}
        disabled={disabled}
        title={title}
        aria-label={title}
        aria-live='polite'
      >
        <span className={cn(styles.toggler)} />

        {modes.map((mode) => (
          <span key={mode} className={styles.iconWrapper}>
            {icons[mode]}
          </span>
        ))}
      </button>
    </div>
  );
});

ColorModeToggle.displayName = 'ColorModeToggle';

export { ColorModeToggle };
