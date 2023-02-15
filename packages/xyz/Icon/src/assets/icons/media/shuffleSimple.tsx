import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ShuffleSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.75 4.5H19.5M19.5 4.5V8.25M19.5 4.5L14.1212 9.8787M19.5 15.75V19.5M19.5 19.5H15.75M19.5 19.5L4.5 4.5M4.5 19.4999L9.8787 14.1212'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ShuffleSimple);
export default ForwardRef;
