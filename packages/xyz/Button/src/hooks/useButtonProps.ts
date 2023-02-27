import type { UseButtonPropsFn } from '../interfaces';

import { useButtonClassName } from './useButtonClassName';

export const useButtonProps: UseButtonPropsFn = (props) => {
  const {
    appearance,
    active,
    shape,
    size,
    state = 'default',
    variant,
    loading,
    loadingMessage,
    loadingIcon,
    bordered,
    colorSchema,
    iconRightName,
    iconLeftName,
    ...omitted
  } = props;
  const className = useButtonClassName(props);

  return {
    ...omitted,
    className,
    interactive: props.interactive ?? (!active && state === 'default'),
  };
};
