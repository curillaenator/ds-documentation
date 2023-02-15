import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PlusMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18.75 5.25L5.25 18.75M3 6.75H10.5M6.75 3V10.5M13.5 17.25H21'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(PlusMinus);
export default ForwardRef;
