import { IconState, IconProps as BaseProps } from '@kit-base/icon';

import { mapPropsToIcons } from '../../utils/icon/mapPropsToIcons';

import { GeneratedIconProps } from './tokenInterfaces';

export type IconAppearance = NonNullable<GeneratedIconProps['appearance']>;
export type IconSize = NonNullable<GeneratedIconProps['size']>;

export type IconInternalAppearance = `color-${IconAppearance}` | `state-${IconState}`;
export type { IconAppearance as IconColor };

export type Icons = keyof typeof mapPropsToIcons;

export interface IconProps extends BaseProps {
  /** имя для иконки */
  name: Icons;
  /** цвет иконки, если не передать будет использоваться родительский color */
  color?: IconAppearance;
  /** размер иконки, по дефолту 2xl */
  size?: IconSize;
}
