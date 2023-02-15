import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Eject = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.4488 3.59688L4.16174 11.4912C4.06286 11.5983 3.99734 11.7319 3.9732 11.8757C3.94906 12.0195 3.96734 12.1672 4.02581 12.3007C4.08428 12.4343 4.1804 12.5479 4.30242 12.6277C4.42444 12.7074 4.56706 12.7499 4.71284 12.7499H19.2869C19.4327 12.7499 19.5753 12.7074 19.6973 12.6277C19.8193 12.5479 19.9154 12.4343 19.9739 12.3007C20.0324 12.1672 20.0507 12.0195 20.0265 11.8757C20.0024 11.7319 19.9369 11.5983 19.838 11.4912L12.551 3.59688C12.4807 3.5208 12.3955 3.46008 12.3007 3.41856C12.2058 3.37703 12.1034 3.35559 11.9999 3.35559C11.8963 3.35559 11.7939 3.37703 11.699 3.41856C11.6042 3.46008 11.519 3.5208 11.4488 3.59688Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M3.75 16.5V18.75C3.75 19.1642 4.08579 19.5 4.5 19.5H19.5C19.9142 19.5 20.25 19.1642 20.25 18.75V16.5C20.25 16.0858 19.9142 15.75 19.5 15.75H4.5C4.08579 15.75 3.75 16.0858 3.75 16.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Eject);
export default ForwardRef;
