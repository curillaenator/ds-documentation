import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { isRouterLink } from '@kit-base/uikit-utils';
import { Button as BaseButton } from '@kit-base/button';

import { useButtonProps } from '../../hooks/useButtonProps';

import type { LinkButtonProps } from './interfaces';

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(({ to, ...rest }, ref) => {
  const props = useButtonProps(rest);

  return isRouterLink(to) ? (
    <BaseButton {...props} ref={ref} component={Link} to={to} />
  ) : (
    <BaseButton {...props} ref={ref} component='a' href={to as string} />
  );
});

export { LinkButton };
