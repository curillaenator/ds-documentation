import React from 'react';
import { Icon } from '@kit-xyz/icon';
import { BaseBadgeProps } from '@kit-base/badge';

import { BadgeProps } from '../interfaces';

export const useBadgeIcons = (props: BadgeProps): BaseBadgeProps => {
  const {
    iconLeftName,
    iconLeftClassName,
    iconRightClassName,
    size: iconSize,
    iconRightName,
    iconColor,
    ...rest
  } = props;

  return {
    iconLeft: iconLeftName ? (
      <Icon className={iconLeftClassName} size={iconSize} name={iconLeftName} color={iconColor} />
    ) : undefined,
    iconRight: iconRightName ? (
      <Icon className={iconRightClassName} size={iconSize} name={iconRightName} color={iconColor} />
    ) : undefined,
    ...rest,
  };
};
