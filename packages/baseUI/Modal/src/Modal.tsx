import React, { FC, Fragment, useState, useMemo, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import { Transition } from '@headlessui/react';
import { usePortal } from '@kit-base/uikit-utils';

import { ModalContext } from './context';
import { useCloseOnEscape } from './hooks/useCloseOnEscape';
import { Overlay } from './components/Overlay';
import { VERSION } from './version';
import { BaseModalProps } from './interfaces';
import { contentTransitions } from './styles/styles';
import styles from './styles/styles.module.scss';

/**
 * Modal -  {@link https://uikit.pcbltools.ru/v4.1/?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-navigation-modal--modal| ссылка на документацию.}
 *
 */
export const Modal: FC<PropsWithChildren<BaseModalProps>> = (props) => {
  const {
    dataTestId,
    open,
    portalId,
    onClose,
    disableBackgroundClick,
    scrollBody,
    scrollClassName,
    transitionClassName,
    children,
    version = VERSION,
  } = props;

  useCloseOnEscape(props);

  const portal = usePortal(portalId);
  const [isAnimationCompleted, setIsAnimationCompleted] = useState<boolean>(false);
  const contextValue = useMemo(() => ({ isAnimationCompleted }), [isAnimationCompleted]);

  return ReactDOM.createPortal(
    <ModalContext.Provider value={contextValue}>
      <Transition
        data-testid={dataTestId}
        data-analytics={dataTestId}
        data-version={version}
        appear
        show={open}
        unmount
        as='div'
        className={cn(styles.transition, transitionClassName)}
      >
        <Overlay {...props} />

        <Transition.Child
          {...contentTransitions}
          data-testid={scrollBody ? `${dataTestId}.Overlay` : undefined}
          as={scrollBody ? 'div' : Fragment}
          // @ts-expect-error
          className={scrollBody ? cn(styles.scrollbody, scrollClassName) : undefined}
          onClick={scrollBody && !disableBackgroundClick ? onClose : undefined}
          afterEnter={() => setIsAnimationCompleted(true)}
          afterLeave={() => setIsAnimationCompleted(false)}
        >
          {children}
        </Transition.Child>
      </Transition>
    </ModalContext.Provider>,
    portal,
  );
};
