import React, { forwardRef } from 'react';
import cn from 'classnames';
import { useColorMode } from '@docusaurus/theme-common';

import { InputProps } from './interfaces';
import styles from './styles.module.scss';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { id, appearance, leftIcon, rightIcon, wrapperClassName, inputClassName, ...rest } = props;
  const { colorMode } = useColorMode();

  return (
    <div className={cn(styles.inputContainer, styles[colorMode], styles[appearance], wrapperClassName)}>
      <input
        id={id}
        ref={ref}
        {...rest}
        aria-label='Search'
        className={cn(styles.input, inputClassName, {
          [styles.input_hasLeftIcon]: !!leftIcon,
          [styles.input_hasRightIcon]: !!rightIcon,
        })}
      />

      {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
      {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
    </div>
  );
});

Input.displayName = 'Input';

export { Input };
