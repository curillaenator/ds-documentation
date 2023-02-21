import type { ButtonProps, ButtonDisabledProps } from '../interfaces';

const overrides: Partial<ButtonProps> = {
  interactive: false,
  elevated: false,
} as const;

export const useDisabledProps = <P extends ButtonProps & ButtonDisabledProps>(props: P): P => {
  if (props.disabled) {
    return { ...props, ...overrides };
  }

  return props;
};
