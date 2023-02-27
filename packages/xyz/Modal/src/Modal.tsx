import React, { FC } from 'react';
import { BaseModal, useRequiredBaseProps } from '@kit-base/modal';

import { DEFAULT_TEST_ID } from './constants';
import { VERSION } from './version';
import { Content } from './components/Content';
import { ModalProps } from './interfaces';
import styles from './styles/styles.module.scss';

/**
 * Modal -  {@link https://uikit.pcbltools.ru/v4.1/?path=/docs/| ссылка на документацию.}
 *
 */
export const Modal: FC<ModalProps> = (props) => {
  const { dataTestId = DEFAULT_TEST_ID } = props;
  const baseProps = useRequiredBaseProps(props);

  return (
    <BaseModal
      {...baseProps}
      dataTestId={dataTestId}
      version={VERSION}
      overlayClassName={styles.overlay}
      scrollClassName={styles.scroll}
      transitionClassName={styles.transition}
    >
      <Content {...props} dataTestId={dataTestId} />
    </BaseModal>
  );
};
