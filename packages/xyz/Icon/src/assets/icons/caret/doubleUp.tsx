import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DoubleUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M4.5 19.5L12 12L19.5 19.5M4.5 12L12 4.5L19.5 12'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(DoubleUp);
export default ForwardRef;
