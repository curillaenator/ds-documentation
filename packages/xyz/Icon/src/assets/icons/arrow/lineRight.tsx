import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LineRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M2.99982 12H17.2498M17.2498 12L10.4998 5.25M17.2498 12L10.4998 18.75M20.25 3.75V20.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(LineRight);
export default ForwardRef;
