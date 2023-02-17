import { SyntheticEvent } from 'react';

import { GeneratedIconProps } from './tokenInterfaces';

export type IconAppearance = NonNullable<GeneratedIconProps['appearance']>;
export type IconSize = NonNullable<GeneratedIconProps['size']>;

export type IconInternalAppearance = `color-${IconAppearance}` | `state-disabled`;
export type { IconAppearance as IconColor };

export type Icons = 'default-icon';

export interface IconProps {
  /** уникальный id элемента */
  id?: string;
  /** уникальный id для тестирования */
  dataTestId?: string;
  /** состояние */
  state?: 'disabled';
  /** обработчик для иконки */
  onClick?: (e: SyntheticEvent<HTMLImageElement | SVGElement>) => void;
  /** цвет иконки, если не передать будет использоваться родительский color */
  color?: IconAppearance;
  /** размер иконки, по дефолту 2xl */
  size?: IconSize;
  /** классы для иконки */
  className?: string;

  name?: Icons;
}
