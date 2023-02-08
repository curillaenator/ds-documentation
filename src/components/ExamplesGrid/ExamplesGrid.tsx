import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface ExamplesGridProps {
  children: ReactNode;
  cols?: number;
  mb?: number;
}

export const ExamplesGrid: FC<ExamplesGridProps> = (props) => {
  const { cols = 3, children, mb = 0 } = props;
  return (
    <div className={cn(styles.examples, styles[`cols_${cols}`])} style={{ marginBottom: mb }}>
      {children}
    </div>
  );
};
