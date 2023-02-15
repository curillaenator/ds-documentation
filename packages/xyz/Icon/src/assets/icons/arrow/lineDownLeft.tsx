import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LineDownLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 8.25005L6 18.75M6 18.75V9.37505M6 18.75H15.375M20.25 3.75049H3.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(LineDownLeft);
export default ForwardRef;
