import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Out = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.75 4.5H19.5M19.5 4.5V8.25M19.5 4.5L14.25 9.75M8.25 19.5H4.5M4.5 19.5V15.75M4.5 19.5L9.75 14.25M19.5 15.75V19.5M19.5 19.5H15.75M19.5 19.5L14.25 14.25M4.5 8.25V4.5M4.5 4.5H8.25M4.5 4.5L9.75 9.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Out);
export default ForwardRef;
