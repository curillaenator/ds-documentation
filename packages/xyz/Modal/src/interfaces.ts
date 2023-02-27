import { AriaAttributes, ReactNode } from 'react';
import { OmitedBaseModalProps } from '@kit-base/modal';

export interface ModalProps extends OmitedBaseModalProps, AriaAttributes {
  /** скрыть кнопку закрытия у модального окна. По умолчанию - false */
  hasCloseButton?: boolean;
  /** скрыть/показать фейд градиенты сверху и снизу модального окна */
  hasFades?: boolean;
  /** children */
  children: ReactNode;
}
