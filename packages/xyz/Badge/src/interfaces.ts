import type { BaseBadgeProps, BaseBadgeInternalProps } from '@kit-base/badge';
import { Icons, IconColor } from '@kit-xyz/icon';

import type { GeneratedBadgeProps } from './tokenInterfaces';

export type BadgeAppearance = GeneratedBadgeProps['appearance'];
export type BadgeVariant = GeneratedBadgeProps['variant'];
export type BadgeSize = GeneratedBadgeProps['size'];
export type BadgeShape = GeneratedBadgeProps['shape'];

type OmittedBaseProps = Omit<BaseBadgeProps, keyof GeneratedBadgeProps | keyof BaseBadgeInternalProps>;

export interface BadgeProps extends GeneratedBadgeProps, OmittedBaseProps {
  /** наименование левой икноки */
  iconLeftName?: Icons;
  /** наименование правой икноки */
  iconRightName?: Icons;
  /** цвет иконки */
  iconColor?: IconColor;
  /** класс для левой иконки */
  iconLeftClassName?: string;
  /** класс для правой иконки */
  iconRightClassName?: string;
}
