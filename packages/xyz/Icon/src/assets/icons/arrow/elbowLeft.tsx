import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ElbowLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9 7.5H2.25M2.25 7.5V14.25M2.25 7.5L12.75 18L21.75 9'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ElbowLeft);
export default ForwardRef;
