import React, { FC, ReactNode, useState, useCallback, useMemo } from 'react';
import cn from 'classnames';
import CodeBlock from '@theme/CodeBlock';
import { ColorModeToggle } from '@site/src/components/ColorModeToggle';
import { Button } from '@site/src/components/Button';

import { useLocalColorMode } from './hooks/useLocalColorMode';
import { ViewportContext } from './context';
import { DocViewportProps } from './interfaces';
import styles from './styles.module.scss';

export const DocViewport: FC<DocViewportProps> = (props) => {
  const { modes = ['light', 'dark', 'color'], codeBlock, language = 'jsx', children } = props;
  const { localColorMode, handleLocalColorMode } = useLocalColorMode();

  const [selectedCodeBlock, setSelectedCodeBlock] = useState<ReactNode>(codeBlock || '');
  const [open, setOpen] = useState<boolean>(false);

  const selectCodeBlock = useCallback((newCodeBlock: ReactNode) => {
    setSelectedCodeBlock(newCodeBlock);
    setOpen(true);
  }, []);

  const contextValue = useMemo(
    () => ({
      colorMode: localColorMode,
      codeBlock: selectedCodeBlock,
      selectCodeBlock,
    }),
    [localColorMode, selectedCodeBlock, selectCodeBlock],
  );

  return (
    <ViewportContext.Provider value={contextValue}>
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
