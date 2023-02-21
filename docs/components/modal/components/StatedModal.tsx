import React, { FC, useState, useCallback } from 'react';
import { Button } from '@kit-xyz/button';
import { Modal } from '@kit-xyz/modal';

export const StatedModal: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleToggle = useCallback(() => setOpen(!open), [open, setOpen]);
  const onClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <Button onClick={handleToggle}>Открыть</Button>

      <Modal open={open} onClose={onClose} portalId='docusaurus-portal-id'>
        Hi!
      </Modal>
    </>
  );
};
