import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Checks = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M13.875 7.875L5.625 16.125L1.5 12.0002M22.5 7.875L14.25 16.125L12.0587 13.9339'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Checks);
export default ForwardRef;
