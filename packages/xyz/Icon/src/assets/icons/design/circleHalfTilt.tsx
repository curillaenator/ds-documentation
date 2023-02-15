import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CircleHalfTilt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18.3641 5.63595L5.63621 18.3639M13.3128 10.6872L19.5412 16.9156M10.6877 13.3121L16.9163 19.5406M8.06301 15.9375L13.063 20.9374M15.9375 8.0625L20.9374 13.0624M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CircleHalfTilt);
export default ForwardRef;
