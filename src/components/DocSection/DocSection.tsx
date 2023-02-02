import React, { FC } from 'react';
import cn from 'classnames';
import { useColorMode } from '@docusaurus/theme-common';

import { DocBlockProps } from './interfaces';
import styles from './styles.module.scss';

export const DocSection: FC<DocBlockProps> = (props) => {
  const { id, title, description, modes = [], children } = props;

  const { colorMode } = useColorMode();

  return (
    <section id={id} className={cn(styles.section, styles[colorMode])}>
      <h2 className={styles.title}>{title}</h2>

      <span className={styles.description}>{description}</span>

      <div className={styles.viewport}>
        {!!modes.length && (
          <div className={styles.modes}>
            {modes.map((mode) => (
              <div key={mode}>{mode}</div>
            ))}
          </div>
        )}

        {children}

        <div className={styles.interactive}></div>
      </div>
    </section>
  );
};
