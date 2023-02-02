import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export const MGlass: FC<{ className?: string }> = ({ className }) => (
  <svg
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={cn(styles.searchIcon, className)}
  >
    <path d='M11 21L7 25' strokeWidth='2' strokeLinecap='round' />
    <path d='M18 19V19C19.6569 19 21 17.6569 21 16V16' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />

    <circle cx='17' cy='15' r='8' strokeWidth='2' />
  </svg>
);
