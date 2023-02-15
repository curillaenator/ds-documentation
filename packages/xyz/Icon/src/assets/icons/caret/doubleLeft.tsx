import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DoubleLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18.75 19.5L11.25 12L18.75 4.5M11.25 19.5L3.75 12L11.25 4.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(DoubleLeft);
export default ForwardRef;
