import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Right = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.75 12H20.25M20.25 12L13.5 5.25M20.25 12L13.5 18.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Right);
export default ForwardRef;
