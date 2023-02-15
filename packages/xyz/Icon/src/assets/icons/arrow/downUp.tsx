import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DownUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M10.5 18L7.5 21M7.5 21L4.5 18M7.5 21V3M13.5 6L16.5 3M16.5 3L19.5 6M16.5 3V21'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(DownUp);
export default ForwardRef;
