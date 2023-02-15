import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Keyboard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M5.25 12H18.75M5.25 9H18.75M5.25 15H6M9 15H15M18 15H18.75M3.04549 5.25H20.9545C21.3938 5.25 21.75 5.60616 21.75 6.0455V17.9545C21.75 18.3938 21.3938 18.75 20.9545 18.75H3.04549C2.60616 18.75 2.25 18.3938 2.25 17.9545V6.0455C2.25 5.60616 2.60616 5.25 3.04549 5.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Keyboard);
export default ForwardRef;
