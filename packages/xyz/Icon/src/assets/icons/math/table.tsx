import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Table = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3 9.75H21M3 14.25H21M8.25 9.75V18.75M3.00004 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75004C3.55112 18.75 3.36036 18.671 3.21971 18.5303C3.07905 18.3897 3.00004 18.1989 3.00004 18V5.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Table);
export default ForwardRef;
