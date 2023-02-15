import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Framer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M5.25 9.375V15.75L12 22.125V15.75H18.75L5.25 3H18.75V9.375H5.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Framer);
export default ForwardRef;
