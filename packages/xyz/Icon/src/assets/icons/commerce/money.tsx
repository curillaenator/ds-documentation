import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Money = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 6L22.5 11.25M16.5 18L22.5 12.75M7.5 6L1.5 11.25M7.5 18L1.5 12.75M2.25 6H21.75C22.1642 6 22.5 6.33579 22.5 6.75V17.25C22.5 17.6642 22.1642 18 21.75 18H2.25C1.83579 18 1.5 17.6642 1.5 17.25V6.75C1.5 6.33579 1.83579 6 2.25 6ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Money);
export default ForwardRef;
