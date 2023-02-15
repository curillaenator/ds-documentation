import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const In = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18 9.75H14.25M14.25 9.75V6M14.25 9.75L19.5 4.5M6 14.25H9.75M9.75 14.25V18M9.75 14.25L4.5 19.5M14.25 18V14.25M14.25 14.25H18M14.25 14.25L19.5 19.5M9.75 6V9.75M9.75 9.75H6M9.75 9.75L4.5 4.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(In);
export default ForwardRef;
