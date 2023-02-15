import React, { FC } from 'react';
import { BaseAvatar } from '@kit-base/avatar';
import { useImageLoader } from '@kit-base/uikit-utils';

import { useClassName } from './hooks/useClassName';
import { DEFAULT_TEST_ID } from './constants';
import { AvatarProps } from './interfaces';

export const Avatar: FC<AvatarProps> = (props) => {
  const { dataTestId, disabled = false, imageURL, text, notionPlacement = 'off', ...rest } = props;

  const classNames = useClassName(props);

  const { dataImg, error } = useImageLoader(imageURL || '');

  return (
    <BaseAvatar
      dataTestId={dataTestId || DEFAULT_TEST_ID}
      initials={text}
      notionPlacement={notionPlacement !== 'off' ? notionPlacement : undefined}
      cancelableBorder={false}
      online={notionPlacement !== 'off' && !disabled}
      src={error ? '' : dataImg}
      {...rest}
      className={classNames}
    />
  );
};
