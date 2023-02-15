import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DoubleDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5 12L12 19.5L4.5 12M19.5 4.5L12 12L4.5 4.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(DoubleDown);
export default ForwardRef;
