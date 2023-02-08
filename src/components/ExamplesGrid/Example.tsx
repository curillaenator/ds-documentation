import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

import { useViewportContext } from '@site/src/components/DocViewport';
import styles from './styles.module.scss';

// заменить на компонент кита
import { Button } from '@site/src/components/Button';

interface ExampleProps {
  children: ReactNode;
  exampleCode?: ReactNode;
}

export const Example: FC<ExampleProps> = (props) => {
  const { children, exampleCode } = props;
  const { colorMode, selectCodeBlock } = useViewportContext();

  return (
    <div className={cn(styles.example, styles[`example_${colorMode}`])}>
      {exampleCode && (
        <div className={styles.buttons}>
          <Button onClick={() => selectCodeBlock(exampleCode)} />
        </div>
      )}

      {children}
    </div>
  );
};
