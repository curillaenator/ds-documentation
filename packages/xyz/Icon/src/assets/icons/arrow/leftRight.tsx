import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LeftRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18 13.5L21 16.5M21 16.5L18 19.5M21 16.5H3M6 10.5L3 7.5M3 7.5L6 4.5M3 7.5H21'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(LeftRight);
export default ForwardRef;
