import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberSix = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.45422 13.1254L13.5002 3'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 21C14.8995 21 17.25 18.6495 17.25 15.75C17.25 12.8505 14.8995 10.5 12 10.5C9.10051 10.5 6.75 12.8505 6.75 15.75C6.75 18.6495 9.10051 21 12 21Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberSix);
export default ForwardRef;
