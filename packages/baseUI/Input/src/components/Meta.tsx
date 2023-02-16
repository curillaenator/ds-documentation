import React, { FC } from 'react';
import cn from 'classnames';

import { MetaProps } from './interfaces';
import styles from './meta.module.scss';

export const Meta: FC<MetaProps> = (props) => {
  const { dataTestId, startMetaText, endMetaText, showState } = props;

  return (
    <div data-testid={`${dataTestId}.Wrapper.Meta`} className={styles.meta}>
      <span
        className={cn(styles.text, {
          [styles.text_left]: !showState,
          [styles.text_leftStated]: showState,
        })}
      >
        {startMetaText}
      </span>

      <span className={cn(styles.text, styles.text_right)}>{endMetaText}</span>
    </div>
  );
};
