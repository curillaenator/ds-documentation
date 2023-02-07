import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface ExamplesGridProps {
  children: ReactNode;
  cols?: number;
}

export const ExamplesGrid: FC<ExamplesGridProps> = (props) => {
  const { cols = 3, children } = props;
  return <div className={cn(styles.examples, styles[`cols_${cols}`])}>{children}</div>;
};
