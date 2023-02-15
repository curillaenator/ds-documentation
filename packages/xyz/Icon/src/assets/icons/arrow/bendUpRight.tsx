import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BendUpRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 14.25L21 9.75M21 9.75L16.5 5.25M21 9.75H12C9.61305 9.75 7.32387 10.6982 5.63604 12.386C3.94821 14.0739 3 16.3631 3 18.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BendUpRight);
export default ForwardRef;
