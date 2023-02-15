import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ElbowDownRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15 12L19.5 16.5M19.5 16.5L15 21M19.5 16.5H6V3'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ElbowDownRight);
export default ForwardRef;
