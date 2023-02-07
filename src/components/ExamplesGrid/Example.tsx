import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

import { useViewportContext } from '@site/src/components/DocViewport';
import styles from './styles.module.scss';

interface ExampleProps {
  children: ReactNode;
}

export const Example: FC<ExampleProps> = (props) => {
  const { children } = props;
  const { colorMode } = useViewportContext();

  return <div className={cn(styles.example, styles[`example_${colorMode}`])}>{children}</div>;
};
