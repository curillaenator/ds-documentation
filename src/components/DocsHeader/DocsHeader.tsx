import React, { FC, useEffect, useContext } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import cn from 'classnames';

import { DocItemContext } from '@site/src/services/docItemContext';

import { Badge, BadgeProps } from '../Badge';
import { LinkButton } from '../LinkButton';

import { useMeta } from './hooks/useMeta';

import { DocsHeaderProps } from './interfaces';
import styles from './styles.module.scss';

export const DocsHeader: FC<DocsHeaderProps> = (props) => {
  const { title, description, designer, developer, headerImage, hasPadding = true, versions, actualVersion } = props;

  const { setSelectedVersion } = useContext(DocItemContext);

  useEffect(() => {
    if (actualVersion && versions.length) {
      const index = versions.findIndex((v) => v === actualVersion);
      setSelectedVersion(versions[index]);
    }
  }, [actualVersion, versions, setSelectedVersion]);

  const { colorMode } = useColorMode();
  const { links, badges } = useMeta(props);

  return (
    <header
      className={cn(styles.header, styles[colorMode], {
        [styles.header_withPadding]: hasPadding,
      })}
    >
      <div className={styles.headerInner}>
        {!!headerImage && (
          <div className={styles.imageWrapper}>
            <img src={headerImage} />
          </div>
        )}

        {!!badges.length && (
          <div className={styles.badges}>
            <select onChange={(e) => setSelectedVersion(e.target.value)}>
              {versions.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>

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
      </div>
    </header>
  );
};
