import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ListDashes = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9 6H20.25M9.00051 12H20.2499M9.00051 18H20.2499M3.75 6H5.25M3.75048 12H5.2499M3.75048 18H5.2499'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ListDashes);
export default ForwardRef;
