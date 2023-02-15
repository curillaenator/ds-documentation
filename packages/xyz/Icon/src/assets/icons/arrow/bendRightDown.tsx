import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BendRightDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.75 16.5L14.25 21M14.25 21L18.75 16.5M14.25 21V12C14.25 9.61305 13.3018 7.32387 11.614 5.63604C9.92613 3.94821 7.63695 3 5.25 3'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BendRightDown);
export default ForwardRef;
