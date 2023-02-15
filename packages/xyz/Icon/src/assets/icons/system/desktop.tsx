import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Desktop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15 21H9M3 14.25H21M12 18V21M19.5 18H4.5C3.67157 18 3 17.3284 3 16.5V6C3 5.17157 3.67157 4.5 4.5 4.5H19.5C20.3284 4.5 21 5.17157 21 6V16.5C21 17.3284 20.3284 18 19.5 18Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Desktop);
export default ForwardRef;
