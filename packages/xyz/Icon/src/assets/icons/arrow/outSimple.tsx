import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const OutSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15 4.5H19.5M19.5 4.5V9M19.5 4.5L14.25 9.75M9 19.5H4.5M4.5 19.5V15M4.5 19.5L9.75 14.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(OutSimple);
export default ForwardRef;
