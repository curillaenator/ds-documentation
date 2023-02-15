import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Code = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M6 8.25L1.5 12L6 15.75M18 8.25L22.5 12L18 15.75M15 3.75L9 20.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Code);
export default ForwardRef;
