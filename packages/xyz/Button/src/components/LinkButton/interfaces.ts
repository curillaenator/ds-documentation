import type { LinkProps, Link } from 'react-router-dom';

import type { ButtonProps } from '../../interfaces';

export interface LinkButtonProps extends Omit<LinkProps, 'children'>, ButtonProps {
  to: LinkProps['to'] | string;
}

export type UseLinkButtonProps = {
  <P extends LinkButtonProps>(props: P): Omit<LinkButtonProps, 'to'> &
    ({ component: 'a'; href: string } | { component: Link; to: LinkProps['to'] });
};
