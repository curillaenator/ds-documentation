import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Up = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.946 20.3999L11.946 3.8999M11.946 3.8999L18.696 10.6499M11.946 3.8999L5.19598 10.6499'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Up);
export default ForwardRef;
