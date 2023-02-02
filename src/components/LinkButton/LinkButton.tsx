import React, { FC } from 'react';
import cn from 'classnames';
import { useColorMode } from '@docusaurus/theme-common';

import { ICONS_ASSOC } from './constants';
import { LinkButtonProps } from './interfaces';
import styles from './styles.module.scss';

export const LinkButton: FC<LinkButtonProps> = (props) => {
  const { icon, appearance = 'outline', children, href } = props;

  const { colorMode } = useColorMode();

  return (
    <a className={cn(styles.link, styles[appearance], styles[colorMode])} href={href} target='_blank'>
      {icon && ICONS_ASSOC[icon]}

      <span>{children}</span>
    </a>
  );
};
