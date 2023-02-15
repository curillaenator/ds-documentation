import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BendDownLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.5 9.75L3 14.25M3 14.25L7.5 18.75M3 14.25H12C14.3869 14.25 16.6761 13.3018 18.364 11.614C20.0518 9.92613 21 7.63695 21 5.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BendDownLeft);
export default ForwardRef;
