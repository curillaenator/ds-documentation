import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberZero = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 21.75C15.7279 21.75 18.75 17.3848 18.75 12C18.75 6.61522 15.7279 2.25 12 2.25C8.27208 2.25 5.25 6.61522 5.25 12C5.25 17.3848 8.27208 21.75 12 21.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberZero);
export default ForwardRef;
