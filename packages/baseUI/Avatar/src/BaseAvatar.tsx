import React, { FC } from 'react';
import cn from 'classnames';

import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import { AvatarProps } from './interfaces';
import styles from './styles/styles.module.scss';

/**
 * Avatar -  {@link https://uikit.pcbltools.ru/v4.1/?path=/docs/| ссылка на документацию.}
 */
export const BaseAvatar: FC<AvatarProps> = (props) => {
  const {
    src,
    initials = 'CA',
    alt,
    title,
    username,
    subline,
    online,
    notion,
    cancelableBorder,
    notionPlacement = 'bottom-right',
    disabled,
    dataTestId = DEFAULT_TEST_ID,
    className,
  } = props;

  return (
    <div
      data-testid={dataTestId}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      className={cn(styles.container, className)}
    >
      <div className={cn(styles.avatar, { [styles._bordered]: !cancelableBorder || !src })}>
        {src && <img data-testid={`${dataTestId}.Image`} className={styles.image} src={src} alt={alt} title={title} />}

        {!src && (
          <span data-testid={`${dataTestId}.Text`} className={styles.text}>
            {initials.slice(0, 2).toUpperCase()}
          </span>
        )}

        {online && !disabled && (
          <div data-testid={`${dataTestId}.Online`} className={cn(styles.online, styles[notionPlacement])} />
        )}

        {!!notion && (
          <div data-testid={`${dataTestId}.Notion`} className={cn(styles.notion, styles[notionPlacement])}>
            {notion}
          </div>
        )}
      </div>

      {username && (
        <div className={cn(styles.content)}>
          <span data-testid={`${dataTestId}.Username`} className={styles.username}>
            {username}
          </span>

          {subline && (
            <span data-testid={`${dataTestId}.Subline`} className={styles.subline}>
              {subline}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
