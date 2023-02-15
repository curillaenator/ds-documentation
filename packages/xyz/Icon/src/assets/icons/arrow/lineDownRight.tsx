import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LineDownRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.5 8.25005L18 18.75M18 18.75V9.37505M18 18.75H8.625M3.75 3.75049H20.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(LineDownRight);
export default ForwardRef;
