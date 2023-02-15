import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BendDoubleUpLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.5 14.25L3 9.75L7.5 5.25M12 14.25L7.5 9.75M7.5 9.75L12 5.25M7.5 9.75H12C14.3869 9.75 16.6761 10.6982 18.364 12.386C20.0518 14.0739 21 16.3631 21 18.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BendDoubleUpLeft);
export default ForwardRef;
