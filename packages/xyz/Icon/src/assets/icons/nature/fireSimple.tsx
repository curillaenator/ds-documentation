import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FireSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M6.74216 6.12733C5.29483 8.3092 4.11379 10.8015 4.11379 13.1251C4.11379 15.2137 4.94348 17.2167 6.42033 18.6935C7.89718 20.1704 9.90021 21.0001 11.9888 21.0001C14.0774 21.0001 16.0804 20.1704 17.5573 18.6935C19.0341 17.2167 19.8638 15.2137 19.8638 13.1251C19.8638 8.25008 16.4888 4.50008 13.7535 1.76929L13.7534 1.76936L10.4888 8.62508L6.74226 6.1274L6.74216 6.12733Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FireSimple);
export default ForwardRef;
