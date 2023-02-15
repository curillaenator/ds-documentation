import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ElbowDownLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9 12L4.5 16.5M4.5 16.5L9 21M4.5 16.5H18V3'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ElbowDownLeft);
export default ForwardRef;
