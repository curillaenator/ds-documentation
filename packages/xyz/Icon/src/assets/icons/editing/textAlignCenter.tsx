import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TextAlignCenter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.75 6.375H20.25M6 10.125H18M3.75026 13.875H20.2497M6.00026 17.625H17.9997'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(TextAlignCenter);
export default ForwardRef;
