import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LineLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.0002 12H6.75022M6.75022 12L13.5003 5.25M6.75022 12L13.5003 18.75M3.75 3.75V20.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(LineLeft);
export default ForwardRef;
