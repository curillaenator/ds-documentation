import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ElbowUpRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15 12L19.5 7.5M19.5 7.5L15 3M19.5 7.5H6V21'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ElbowUpRight);
export default ForwardRef;
