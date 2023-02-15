import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DoubleRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M5.25 4.5L12.75 12L5.25 19.5M12.75 4.5L20.25 12L12.75 19.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(DoubleRight);
export default ForwardRef;
