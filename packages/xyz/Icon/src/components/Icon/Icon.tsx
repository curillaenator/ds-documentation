import React, { useContext, useMemo, FC } from 'react';
import cn from 'classnames';
import { Icon as BaseIcon } from '@kit-base/icon';

import { useIconClassName } from '../../hooks/useIconClassName';
import { IconsStoreContext } from '../../contexts';

import { IconProps } from './interfaces';

const Icon: FC<IconProps> = (props) => {
  const { className, name } = props;

  const iconStore = useContext(IconsStoreContext);
  const IconComponent = useMemo(() => iconStore.get(name), [iconStore, name]);

  return (
    <BaseIcon
      data-icon-name={name}
      {...props}
      className={cn(useIconClassName(props), className)}
      component={IconComponent}
    />
  );
};

export { Icon };
