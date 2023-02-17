import { useMemo } from 'react';
import cn from 'classnames';

import styles from '../styles/styles.module.scss';
import base from '../styles/base.module.scss';
import { IconProps } from '../interfaces';

export const useIconClassName = (props: IconProps): string => {
  const { color, state, size = '2xl' } = props;
  const disabled = state === 'disabled';

  return useMemo(() => {
    if (disabled) {
      return cn(base.icon, styles['state-disabled'], styles[`_size_${size}`]);
    }

    if (!color) return cn(base.icon, styles[`_size_${size}`]);

    return cn(base.icon, styles[`_color-${color}`], styles[`_size_${size}`]);
  }, [color, disabled, size]);
};
