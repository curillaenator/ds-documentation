import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Bank = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M5.25019 9V16.5M9.75016 9V16.5M14.2502 9V16.5M18.7502 9V16.5M3.00017 16.5H21.0002M1.50018 19.5H22.5002M2.25012 9H21.7501L12.0001 3L2.25012 9Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Bank);
export default ForwardRef;
