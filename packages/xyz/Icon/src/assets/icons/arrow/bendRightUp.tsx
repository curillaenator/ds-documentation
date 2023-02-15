import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BendRightUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.75 7.5L14.25 3M14.25 3L18.75 7.5M14.25 3V12C14.25 14.3869 13.3018 16.6761 11.614 18.364C9.92613 20.0518 7.63695 21 5.25 21'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BendRightUp);
export default ForwardRef;
