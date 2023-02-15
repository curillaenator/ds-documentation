import cn from 'classnames';

import { BadgeProps } from '../interfaces';
import styles from '../styles/badge.module.scss';

const resolveColorSchema = (props: BadgeProps) => {
  const { variant = 'solid', appearance = 'primary', disabled } = props;

  if (disabled) {
    return `state-disabled-${variant}` as const;
  }

  return `color-${appearance}-${variant}` as const;
};

export const useBadgeProps = (props: BadgeProps) => {
  const { size = 'xl', className, ...rest } = props;

  const colorSchema = resolveColorSchema(props);

  return {
    className: cn(styles.badgeVariables, styles[`_size_${size}`], styles[`_${colorSchema}`], className),
    size,
    ...rest,
  };
};
