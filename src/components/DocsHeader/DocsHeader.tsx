import React, { FC } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
// import useBaseUrl from '@docusaurus/useBaseUrl';
import cn from 'classnames';

import { Badge, BadgeProps } from '../Badge';
import { LinkButton } from '../LinkButton';

import { useMeta } from './hooks/useMeta';
import { useImageLoader } from '../../utils';

import { DocsHeaderProps } from './interfaces';
import styles from './styles.module.scss';

export const DocsHeader: FC<DocsHeaderProps> = (props) => {
  const { title, description, designer, developer, headerImagepath } = props;

  const { dataImg, error } = useImageLoader(headerImagepath);

  const { colorMode } = useColorMode();
  const { links, badges } = useMeta(props);

  return (
    <header className={cn(styles.header, styles[colorMode])}>
      {/* <div className={styles.container}> */}
      {!error && (
        <div className={styles.imageWrapper}>
          <img src={dataImg} />
        </div>
      )}

      {!!badges.length && (
        <div className={styles.badges}>
          {badges.map(({ title, appearance }, i) => (
            <Badge key={`${title}${i}`} appearance={appearance as BadgeProps['appearance']}>
              {title}
            </Badge>
          ))}
        </div>
      )}

      <div className={styles.content}>
        <h1>{title}</h1>

        <p
          className={cn(styles.description, {
            [styles.description_mb]: !!links.length,
          })}
        >
          {description}
        </p>

        {!!links.length && (
          <div className={styles.contenLinks}>
            {links.map(({ link, title }, i) => (
              <LinkButton
                key={`${title}${i}`}
                href={link}
                appearance={title === 'bitbucket' ? 'primary' : 'outline'}
                icon={title}
              >
                {title.slice(0, 1).toLocaleUpperCase() + title.slice(1)}
              </LinkButton>
            ))}
          </div>
        )}
      </div>

      {(designer || developer) && (
        <div className={styles.meta}>
          {designer && <Badge label='Дизайн:'>{designer}</Badge>}

          {developer && <Badge label='Разработка:'>{developer}</Badge>}
        </div>
      )}
      {/* </div> */}
    </header>
  );
};
