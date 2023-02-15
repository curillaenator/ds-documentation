import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Left = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.25 12H3.75M3.75 12L10.5 5.25M3.75 12L10.5 18.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Left);
export default ForwardRef;
