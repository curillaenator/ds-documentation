import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const InSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M14.25 5.25V9.75M14.25 9.75H18.75M14.25 9.75L19.5 4.5M5.25 14.25H9.75M9.75 14.25V18.75M9.75 14.25L4.5 19.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(InSimple);
export default ForwardRef;
