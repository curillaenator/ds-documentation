import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const StackSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M1.5 13.5L12 19.5L22.5 13.5M1.5 9.75L12 15.75L22.5 9.75L12 3.75L1.5 9.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(StackSimple);
export default ForwardRef;
