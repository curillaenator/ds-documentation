import React, { FC, CSSProperties } from 'react';

import styles from './border.module.scss';

interface BorderProps {
  style?: CSSProperties;
}

export const Border: FC<BorderProps> = (props) => <div className={styles.border} style={props.style} />;
