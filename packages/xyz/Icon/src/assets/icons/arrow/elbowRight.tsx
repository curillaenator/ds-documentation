import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ElbowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15 7.5H21.75M21.75 7.5V14.25M21.75 7.5L11.25 18L2.25 9'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ElbowRight);
export default ForwardRef;
