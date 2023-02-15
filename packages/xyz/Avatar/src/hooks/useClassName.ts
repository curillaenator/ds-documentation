import cn from 'classnames';

import { AvatarProps } from '../interfaces';
import styles from '../avatar.module.scss';

const resolveColors = (disabled?: boolean): string => {
  if (disabled) {
    return 'state-disabled';
  }

  return 'color-default';
};

export const useClassName = (props: AvatarProps): string => {
  const { background = 'solid', shape = 'rounded', size = '2xl', disabled = false, className } = props;

  const colorSchema = resolveColors(disabled);

  const borderClasses = shape === 'rounded' ? styles._rectangular : styles._circular;

  const bgClasses = background === 'gradient' ? styles._withGradient : styles._withBgColor;

  const classes = cn(
    styles.avatarVariables,
    styles[`_${colorSchema}`],
    styles[`_size_${size}`],
    borderClasses,
    bgClasses,
    className,
  );

  return classes;
};
