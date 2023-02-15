import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Diamond = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.4696 2.40526L2.40533 11.4696C2.11244 11.7625 2.11244 12.2374 2.40533 12.5303L11.4696 21.5946C11.7625 21.8875 12.2374 21.8875 12.5303 21.5946L21.5946 12.5303C21.8875 12.2374 21.8875 11.7625 21.5946 11.4696L12.5303 2.40526C12.2374 2.11236 11.7625 2.11236 11.4696 2.40526Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Diamond);
export default ForwardRef;
