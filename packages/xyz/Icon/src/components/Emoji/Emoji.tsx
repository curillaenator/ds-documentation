import React, { forwardRef } from 'react';
import cns from 'classnames';
import { Icon as BaseEmoji } from '@kit-base/icon';

import { emojiStore } from '../../utils/emoji/emojiStore';

import { DEFAULT_TEST_ID } from './constants';
import { sizesStyles } from './styles/styles';
import { EmojiProps } from './interfaces';

export const Emoji = forwardRef<HTMLImageElement, EmojiProps>((props, ref) => {
  const { name, className = '', size = 'l', dataTestId = DEFAULT_TEST_ID } = props;

  return (
    <BaseEmoji
      data-icon-name={name}
      {...props}
      dataTestId={dataTestId}
      ref={ref}
      src={emojiStore[name] || ''}
      className={cns(sizesStyles[size], className)}
      component='img'
    />
  );
});
