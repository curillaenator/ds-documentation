import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FatLineDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 3.75H7.5M3 12.75L12 21.75L21 12.75H16.5V6.75H7.5V12.75H3Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FatLineDown);
export default ForwardRef;
