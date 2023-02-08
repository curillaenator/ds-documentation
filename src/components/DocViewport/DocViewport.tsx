import React, { FC, ReactNode, useState, useCallback } from 'react';
import cn from 'classnames';
import CodeBlock from '@theme/CodeBlock';
// import Details from '@theme/MDXComponents/Details';

import { ColorModeToggle } from '@site/src/components/ColorModeToggle';

import { useLocalColorMode } from './hooks/useLocalColorMode';
import { ViewportContext } from './context';

import { DocViewportProps } from './interfaces';
import styles from './styles.module.scss';

// заменить на компонент кита
import { Button } from '@site/src/components/Button';

export const DocViewport: FC<DocViewportProps> = (props) => {
  const { modes = ['light', 'dark', 'color'], codeBlock, language = 'jsx', children } = props;
  const { localColorMode, handleLocalColorMode } = useLocalColorMode();

  const [selectedCodeBlock, setSelectedCodeBlock] = useState<ReactNode>(codeBlock || '');
  const [open, setOpen] = useState<boolean>(false);

  const selectCodeBlock = useCallback((newCodeBlock: ReactNode) => {
    setSelectedCodeBlock(newCodeBlock);
    setOpen(true);
  }, []);

  return (
    <ViewportContext.Provider
      value={{
        colorMode: localColorMode,

        codeBlock: selectedCodeBlock,
        selectCodeBlock,
      }}
    >
      <>
        <div className={cn(styles.viewport, styles[localColorMode])}>
          {!!modes.length && (
            <div className={styles.modes}>
              <ColorModeToggle value={localColorMode} onChange={handleLocalColorMode} modes={modes} />
            </div>
          )}

          {children}

          <div className={styles.interactive}>
            {!!selectedCodeBlock && <Button onClick={() => setOpen((prev) => !prev)}>Код компонента</Button>}
          </div>
        </div>

        {!!selectedCodeBlock && (
          <div
            className={cn(styles.codeBlock, {
              [styles.codeBlock_open]: open,
            })}
          >
            <CodeBlock language={language}>{selectedCodeBlock}</CodeBlock>
          </div>
        )}
      </>
    </ViewportContext.Provider>
  );
};
