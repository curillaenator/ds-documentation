import { IconProps as BaseProps } from '@kit-base/icon';

import { emojiStore } from '../..';

export type Emojis = keyof typeof emojiStore;

export interface EmojiProps extends BaseProps {
  /** Название Emoji */
  name: Emojis;
  /** Размер emoji, по умолчанию l */
  size?: '2xl' | 'xl' | 'l' | 'm' | 's' | 'xs';
}
