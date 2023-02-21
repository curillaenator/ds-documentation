import React, { forwardRef } from 'react';
import { Icon } from '@kit-xyz/icon';
import { Button as BaseButton, useLoadingProps, useDisabledProps } from '@kit-base/button';

import { useButtonProps } from '../../hooks/useButtonProps';
import { useButtonIcons } from '../../hooks/useButtonIcons';

import type { ButtonProps } from './interfaces';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ type = 'button', ...rest }, ref) => {
  const iconized = useButtonIcons(rest);
  // @ts-expect-error нет пакета иконок
  const loaded = useLoadingProps({ ...iconized, loadingIcon: <Icon name='system-spinner-gap' size={rest.size} /> });
  const disabled = useDisabledProps(loaded);
  const props = useButtonProps(disabled);

  return <BaseButton {...props} ref={ref} component='button' type={type} />;
});

export { Button };
