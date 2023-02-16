import React, { FC } from 'react';
import cn from 'classnames';

import { NumericInput } from '../Number';
import { VERSION } from '../../version';
import { DEFAULT_TEST_ID } from '../../constants';

import { NumericRangeProps } from './interfaces';
import styles from './styles/range.module.scss';

export const NumericRange: FC<NumericRangeProps> = (props) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    range,
    size = '2xl',
    shape = 'rounded',
    caption = 'Диапазон',
    state,
    disabled = false,
    placeholders,
    className,
    setRange,
  } = props;

  const commonProps = {
    size,
    shape,
    disabled,
    state,
  };

  return (
    <div
      data-testid={`${dataTestId}.NumericRange`}
      data-analytics={`${DEFAULT_TEST_ID}.NumericRange`}
      data-version={VERSION}
      className={cn(styles.shell, styles[`shell_${size}`], className, {
        [styles.shell_disabled]: disabled,
      })}
    >
      {!!caption && <h3 className={styles.caption}>{caption}</h3>}

      <div className={styles.inputs}>
        <NumericInput
          {...commonProps}
          placeholder={placeholders ? placeholders[0] || '' : 'От'}
          value={range[0]}
          onChange={(e) => setRange([e.target.value, range[1]])}
        />

        <NumericInput
          {...commonProps}
          placeholder={placeholders ? placeholders[1] || '' : 'До'}
          value={range[1]}
          onChange={(e) => setRange([range[0], e.target.value])}
        />
      </div>
    </div>
  );
};
