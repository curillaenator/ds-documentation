import { BaseAvatarProps } from '@kit-base/avatar';

import { GeneratedAvatarProps } from './tokenInterfaces';

type BaseAvatarPropsToOmit = 'notionPlacement' | 'src' | 'initials' | 'username' | 'subline' | 'notion' | 'online';

export interface AvatarProps extends Omit<BaseAvatarProps, BaseAvatarPropsToOmit>, GeneratedAvatarProps {
  notionPlacement?: BaseAvatarProps['notionPlacement'] | 'off';
  imageURL?: BaseAvatarProps['src'];
  text?: BaseAvatarProps['initials'];
  background?: 'gradient' | 'solid';
}
