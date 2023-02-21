import React, { forwardRef } from 'react';
import cns from 'classnames';

import type { ButtonComponent } from './interfaces';
import { VERSION } from './version';
import { DEFAULT_BUTTON_TEST_ID } from './constants';
import styles from './button.module.scss';

export const Button: ButtonComponent = forwardRef((props, ref) => {
  const {
    component,
    className,
    dataTestId,
    interactive = true,
    elevated = true,
    textRevers = false,
    iconLeft,
    iconLeftClassName,
    iconRight,
    iconRightClassName,
    children,
    textSecondary,
    fullWidth = false,
    ...rest
  } = props;

  const Component = component ?? ('button' as React.ElementType);

  const theClassName = cns(className, styles.button, {
    [styles._interactive]: interactive,
    [styles._elevated]: elevated,
    [styles._reversed]: textRevers,
    [styles._width_full]: fullWidth,
  });

  return (
    <Component
      ref={ref}
      className={theClassName}
      data-version={VERSION}
      data-testid={dataTestId}
      data-analytics={DEFAULT_BUTTON_TEST_ID}
      aria-disabled={!!props.disabled}
      {...rest}
    >
      {iconLeft && <span className={cns(styles.iconLeft, iconLeftClassName)}>{iconLeft}</span>}

      {children && <span className={styles.text}>{children}</span>}

      {textSecondary && <span className={styles.textSecondary}>{textSecondary}</span>}

      {iconRight && <span className={cns(styles.iconRight, iconRightClassName)}>{iconRight}</span>}
    </Component>
  );
});
