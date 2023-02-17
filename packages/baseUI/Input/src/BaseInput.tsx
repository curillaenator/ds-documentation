import React, { forwardRef } from 'react';
import cn from 'classnames';

import { useInputProps } from './hooks/useInputProps';
import { VERSION } from './version';
import { DEFAULT_TEST_ID } from './constants';
import { InputProps } from './interfaces';
import styles from './styles/input.module.scss';

/**
 * Input -  {@link https://uikit.pcbltools.ru/v4.1/?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-inputs-input--inp| ссылка на документацию.}
 *
 */
export const BaseInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    value,
    upperNode,
    lowerNode,
    status,
    disabled = false,
    nodeLeft,
    nodeRight,
    active,
    setActive = () => {},
    inputRef,
    isOverlay,
    handleScroll,
    wrapperRef,
    className,
    contentClassName,
    inputClassName,
    ...rest
  } = useInputProps(props, ref);

  return (
    <div
      data-testid={`${dataTestId}.Container`}
      data-analytics={DEFAULT_TEST_ID}
      data-version={VERSION}
      onClick={() => inputRef.current?.focus()}
      onBlur={() => setActive(false)}
      onFocus={() => setActive(true)}
      className={cn(styles.container, className, {
        [styles._interactive]: !disabled,
        [styles._withHover]: !disabled && !active,
        [styles._active]: active,
      })}
    >
      {upperNode}

      <div
        ref={wrapperRef}
        data-testid={`${dataTestId}.Container.Content`}
        className={cn(styles.content, contentClassName)}
      >
        {nodeLeft}

        <div className={styles.overlayWrapper}>
          <input
            {...rest}
            ref={inputRef}
            value={value}
            data-testid={dataTestId}
            disabled={disabled}
            onScroll={handleScroll}
            className={cn(styles.input, inputClassName)}
            tabIndex={0}
            autoComplete={rest.autoComplete || 'off'}
          />

          {status && <div className={styles.accessibilityStatus}>{status}</div>}

          {isOverlay.left && <div className={cn(styles.overlay)} />}
          {isOverlay.right && <div className={cn(styles.overlay, styles.overlay_right)} />}
        </div>

        {nodeRight}
      </div>

      {lowerNode}
    </div>
  );
});
