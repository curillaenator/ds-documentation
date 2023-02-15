import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TextT = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.9995 5.24939V18.7494M4.49949 8.24946V5.2495H19.4995V8.24946M8.99949 18.7494H14.9994'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(TextT);
export default ForwardRef;
