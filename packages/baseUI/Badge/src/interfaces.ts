import { ReactText, HTMLAttributes, ReactNode } from 'react';

export interface BaseBadgeProps extends HTMLAttributes<HTMLSpanElement>, BaseBadgeInternalProps {
  /** тест id */
  dataTestId?: string;
  /** состояние disabled */
  disabled?: boolean;
  /** инверсия порядка отображения элементов */
  reversed?: boolean;
  /** текст для badge */
  children?: ReactText;
  /** дополнительный текст для badge */
  textSecondary?: ReactText;
  /** id для badge */
  id?: string;
}

export interface BaseBadgeInternalProps {
  /** левая иконка */
  iconLeft?: ReactNode;
  /** правая иконка */
  iconRight?: ReactNode;
}
