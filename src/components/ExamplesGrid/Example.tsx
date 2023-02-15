import React, { FC, ReactNode, CSSProperties } from 'react';
import cn from 'classnames';
import { useViewportContext } from '@site/src/components/DocViewport';
import { Button } from '@site/src/components/Button';

import styles from './styles.module.scss';

// заменить на компонент кита

interface ExampleProps {
  children: ReactNode;
  exampleCode?: ReactNode;
  colorMode?: 'light' | 'dark' | 'color';
  style?: CSSProperties;
}

export const Example: FC<ExampleProps> = (props) => {
  const { children, exampleCode, colorMode: externalColorMode, style } = props;
  const { colorMode, selectCodeBlock } = useViewportContext();

  const cMode = externalColorMode || colorMode;

  return (
    <div className={cn(styles.example, styles[`example_${cMode}`])} style={style}>
      {exampleCode && (
        <div className={styles.buttons}>
          <Button onClick={() => selectCodeBlock(exampleCode)} />
        </div>
      )}

      {children}
    </div>
  );
};
