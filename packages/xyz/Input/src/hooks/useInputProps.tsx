import React from 'react';
import cn from 'classnames';
import { Meta, useActiveControl, InputProps as BaseInputProps } from '@kit-base/input';
import { Icon } from '@kit-xyz/icon';

import { Action } from '../components/Action';
import { DEFAULT_TEST_ID, STATE_LABEL_ASSOC } from '../constants';
import { InputProps } from '../interfaces';
import styles from '../styles/input.module.scss';

const resolveColorSchema = (props: InputProps) => {
  const { state, disabled } = props;

  if (disabled) return `state-disabled`;
  if (state) return `state-${state}`;
  return `color-white`;
};

export const useInputProps = (props: InputProps): BaseInputProps => {
  const {
    dataTestId = DEFAULT_TEST_ID,
    value,
    state,
    shape = 'rounded',
    size = '2xl',
    label,
    startMetaText,
    endMetaText,
    iconLeft,
    disabled,
    clearable,
    onClearInput,
    className,
    ...rest
  } = props;

  const activeProps = useActiveControl();

  const colorSchema = resolveColorSchema(props);
  const isClearable = !disabled && value && clearable && onClearInput;

  return {
    ...rest,
    ...activeProps,

    value,
    dataTestId,
    status: STATE_LABEL_ASSOC[state || ''],
    disabled,

    nodeLeft: iconLeft ? <Icon size={size} name={iconLeft} className={styles.noShrink} /> : undefined,
    nodeRight: isClearable ? (
      <Action dataTestId={dataTestId} iconName='math-x-solid' onClick={onClearInput} size={size} />
    ) : undefined,

    upperNode: label ? <Meta startMetaText={label} /> : undefined,
    lowerNode: startMetaText || endMetaText ? <Meta {...props} showState /> : undefined,

    className: cn(
      styles.inputVariables,
      styles[`_size_${size}`],
      styles[`_${shape}`],
      styles[`_${colorSchema}`],
      className,
    ),
  };
};
