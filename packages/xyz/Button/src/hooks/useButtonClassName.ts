import cns from 'classnames';

import type { UseButtonClassNameFn } from '../interfaces';
import styles from '../button.module.scss';
import { DEFAULT_CLASS_NAME_ASSOC } from '../constants';
import { resolveColorSchema } from '../helpers/resolveColorSchema';

export const useButtonClassName: UseButtonClassNameFn = (
  {
    className,
    size = '2xl',
    shape = 'rounded',
    appearance = 'primary',
    state,
    variant = 'solid',
    active,
    loading,
    disabled,
    colorSchema,
    bordered,
  },
  assoc = DEFAULT_CLASS_NAME_ASSOC,
): string => {
  const resolvedColorSchema =
    colorSchema || resolveColorSchema({ appearance, state, variant, active, loading, disabled });

  return cns(
    className,
    styles.buttonVariables,
    assoc.size?.[size],
    assoc.colorSchema?.[resolvedColorSchema],
    assoc.shape?.[shape],
    {
      [assoc.border?.always]: bordered,
      [assoc?.loading]: loading,
    },
  );
};
