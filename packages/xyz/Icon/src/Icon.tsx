import React, { FC } from 'react';
import cn from 'classnames';

import DefaultIcon from './default';
import { useIconClassName } from './hooks/useIconClassName';
import { DEFAULT_TEST_ID } from './constants';
import { IconProps } from './interfaces';

const Icon: FC<IconProps> = (props) => {
  const { className } = props;

  const icClassName = useIconClassName(props);

  return (
    <DefaultIcon
      {...props}
      data-testid={DEFAULT_TEST_ID}
      data-icon-name='default-xyz-icon'
      className={cn(icClassName, className)}
    />
  );

  // return (
  //   <BaseIcon
  //     data-icon-name={name}
  //     {...props}
  //     className={cn(useIconClassName(props), className)}
  //     component={IconComponent}
  //   />
  // );
};

export { Icon };
