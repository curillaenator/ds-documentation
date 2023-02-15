import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TextAlignLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.75 6.375H20.25M3.75 10.125H15.75M3.75051 13.875H20.2499M3.75051 17.625H15.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(TextAlignLeft);
export default ForwardRef;
