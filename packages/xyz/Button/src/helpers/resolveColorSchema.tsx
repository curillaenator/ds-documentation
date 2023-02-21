import type { ColorSchemaResolverFn } from '../interfaces';

export const resolveColorSchema: ColorSchemaResolverFn = ({
  appearance = 'primary',
  variant = 'solid',
  loading,
  active,
  disabled,
  state,
}) => {
  if (disabled) {
    return `state-disabled-${variant}`;
  }

  if (!loading && active) {
    return `state-active-${variant}`;
  }

  if (!loading && state && state !== 'default') {
    return `state-${state}-${variant}`;
  }

  return `color-${appearance}-${variant}` as const;
};
