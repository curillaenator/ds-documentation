import { ReactText } from 'react';

import { InputProps } from '../../interfaces';

export interface NumericRangeProps {
  /** тест id */
  dataTestId?: string;
  /** диапазон в виде tuple [string, string] */
  range: [string, string];
  /** размер компонента, по умолчанию 2xl */
  size?: InputProps['size'];
  /** форма инпутов, по умолчанию rounded */
  shape?: InputProps['shape'];
  /** состояние инпутов, по умолчанию default */
  state?: InputProps['state'];
  /** деактивирован ли компонент, по умолчанию false */
  disabled?: boolean;
  /** заголовок компонента */
  caption?: ReactText;
  /** кастомные плейсхолдеры для инпутов, к примеру ['От', 'До'] */
  placeholders?: [string, string];
  /** дополнительный className */
  className?: string;
  /** обработчик инпутов, принимает tuple [string, string] */
  setRange: (range: [string, string]) => void;
}
