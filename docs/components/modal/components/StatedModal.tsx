import React, { FC, useState, useCallback } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import CodeBlock from '@theme/CodeBlock';
import { Button } from '@kit-xyz/button';

import { base } from '../examples';

export const StatedModal: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleToggle = useCallback(() => setOpen(!open), [open, setOpen]);
  const onClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <Button onClick={handleToggle}>Открыть</Button>

      <BrowserOnly>
        {() => {
          const { Modal } = require('@kit-xyz/modal'); // eslint-disable-line global-require

          return (
            <Modal open={open} onClose={onClose} portalId='docusaurus-portal-id'>
              <CodeBlock language='jsx'>{base}</CodeBlock>
            </Modal>
          );
        }}
      </BrowserOnly>
    </>
  );
};
