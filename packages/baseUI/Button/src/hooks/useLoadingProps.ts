import type { ButtonProps, ButtonLoadingProps } from '../interfaces';
import styles from '../button.module.scss';

const OVERRIDES: ButtonProps = {
  interactive: false,
  textSecondary: undefined,
  iconLeftClassName: styles.iconLoading,
  iconRight: undefined,
} as const;

const useLoadingProps = <P extends ButtonLoadingProps & ButtonProps>({
  loadingMessage = 'Загрузка...',
  loadingIcon,
  ...props
}: P): Omit<P, 'loadingMessage' | 'loadingIcon'> => {
  if (props.loading) {
    return { ...props, ...OVERRIDES, children: loadingMessage, iconLeft: loadingIcon };
  }

  return props;
};

export { useLoadingProps };
