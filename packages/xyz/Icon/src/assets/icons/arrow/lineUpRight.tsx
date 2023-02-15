import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LineUpRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.5 15.75L18 5.25M18 5.25V14.625M18 5.25H8.625M3.75 20.2496H20.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(LineUpRight);
export default ForwardRef;
