import React, { FC } from 'react';
// import { Icon } from '@kit-xyz/icon';

import styles from './styles.module.scss';
import { ActionProps } from './interfaces';

export const Action: FC<ActionProps> = (props) => {
  const { dataTestId, size, iconName, ...rest } = props;

  return (
    <button {...rest} data-testid={`${dataTestId}.Action`} className={styles.actionButton} tabIndex={0} type='button'>
      {/* <Icon name={iconName} size={size} className={styles.icon} /> */}
    </button>
  );
};
