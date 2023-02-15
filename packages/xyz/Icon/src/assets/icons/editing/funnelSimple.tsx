import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FunnelSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M6 12H18M2.25 7.5H21.75M9.75 16.5H14.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FunnelSimple);
export default ForwardRef;
