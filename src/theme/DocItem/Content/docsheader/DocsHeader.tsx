import React, { FC } from "react";
import cn from "classnames";

import { useImageLoader } from "../../../../utils";

import { ICONS_ASSOC } from "./constants";
import { BadgeProps, LinkProps, DocsHeaderProps } from "./interfaces";
import styles from "./styles.module.scss";

const Badge: FC<BadgeProps> = (props) => {
  const { label, appearance = "badge_df", children } = props;

  return (
    <span className={styles.badgeWrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <span className={cn(styles.badge, styles[appearance])}>{children}</span>
    </span>
  );
};

const Link: FC<LinkProps> = (props) => {
  const { icon, appearance = "link_o", children, href } = props;

  return (
    <a
      className={cn(styles.link, styles[appearance])}
      href={href}
      target="_blank"
    >
      {icon && ICONS_ASSOC[icon]}

      <span>{children}</span>
    </a>
  );
};

export const DocsHeader: FC<DocsHeaderProps> = (props) => {
  const {
    title,
    description,
    designer,
    developer,
    bitbucketLink,
    figmaLink,
    jiraLink,
    status,
    version,
    headerImagepath,
  } = props;

  const { dataImg, error } = useImageLoader(headerImagepath);

  return (
    <header className={styles.header}>
      {!error && (
        <div className={styles.imageWrapper}>
          <img src={dataImg} />
        </div>
      )}

      <div className={styles.badges}>
        {version && <Badge>{version}</Badge>}
        {status && <Badge appearance="badge_c">{status}</Badge>}
        <Badge appearance="badge_o">JSON</Badge>
        <Badge appearance="badge_o">SASS</Badge>
      </div>

      <div className={styles.content}>
        <h1>{title}</h1>

        <p>{description}</p>

        <div className={styles.contenLinks}>
          {bitbucketLink && (
            <Link href={bitbucketLink} appearance="link_c" icon="bitbucket">
              Bitbucket
            </Link>
          )}

          {figmaLink && (
            <Link href={figmaLink} appearance="link_o" icon="figma">
              Figma
            </Link>
          )}

          {jiraLink && (
            <Link href={jiraLink} appearance="link_o" icon="jira">
              Jira
            </Link>
          )}
        </div>
      </div>

      <div className={styles.meta}>
        <Badge label="Дизайн:">{designer}</Badge>

        <Badge label="Разработка:">{developer}</Badge>
      </div>
    </header>
  );
};
