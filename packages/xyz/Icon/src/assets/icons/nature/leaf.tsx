import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Leaf = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15 9.00006L3.75 20.2501M6.00005 18.0002C1.50005 10.5002 7.50005 3.00018 20.25 3.75018C21 16.5002 13.5 22.5002 6.00005 18.0002Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Leaf);
export default ForwardRef;
