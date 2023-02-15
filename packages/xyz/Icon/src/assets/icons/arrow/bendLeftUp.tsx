import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BendLeftUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M14.25 7.5L9.75 3M9.75 3L5.25 7.5M9.75 3V12C9.75 14.3869 10.6982 16.6761 12.386 18.364C14.0739 20.0518 16.3631 21 18.75 21'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BendLeftUp);
export default ForwardRef;
