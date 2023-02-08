import React, { FC, ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button onClick={props.onClick} className={styles.customButton} type='button'>
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M28 16L23 11' strokeWidth='2' strokeLinecap='round' />
      <path d='M23 21L28 16' strokeWidth='2' strokeLinecap='round' />
      <path d='M14 23L18 9' strokeWidth='2' strokeLinecap='round' />
      <path d='M4 16L9 21' strokeWidth='2' strokeLinecap='round' />
      <path d='M9 11L4 16' strokeWidth='2' strokeLinecap='round' />
    </svg>

    {props.children && <span>{props.children}</span>}
  </button>
);
