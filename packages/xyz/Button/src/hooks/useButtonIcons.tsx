import React from 'react';
import { Icon } from '@kit-xyz/icon';

import type { UseButtonIconsFn } from '../interfaces';

export const useButtonIcons: UseButtonIconsFn = (props) => {
  const { iconRightName, iconLeftName, ...rest } = props;

  return {
    ...rest,
    iconLeft: iconLeftName ? <Icon name={iconLeftName} size={rest.size} /> : undefined,
    iconRight: iconRightName ? <Icon name={iconRightName} size={rest.size} /> : undefined,
  };
};
