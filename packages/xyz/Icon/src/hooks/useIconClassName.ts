import { useMemo } from 'react';
import cn from 'classnames';

import styles from '../components/Icon/styles/styles.module.scss';
import { IconProps } from '..';

export const useIconClassName = (props: IconProps): string => {
  const { color, state, size = '2xl' } = props;
  const disabled = state === 'disabled';
  return useMemo(() => {
    if (disabled) {
      return cn(styles['state-disabled'], styles[`_size_${size}`]);
    }
    if (!color) return styles[`_size_${size}`];
    return cn(styles[`_color-${color}`], styles[`_size_${size}`]);
  }, [color, disabled, size]);
};
