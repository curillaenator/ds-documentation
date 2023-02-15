import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BendLeftDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M14.25 16.5L9.75 21M9.75 21L5.25 16.5M9.75 21V12C9.75 9.61305 10.6982 7.32387 12.386 5.63604C14.0739 3.94821 16.3631 3 18.75 3'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BendLeftDown);
export default ForwardRef;
