import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberCircleZero = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 16.5C13.6569 16.5 15 14.4853 15 12C15 9.51472 13.6569 7.5 12 7.5C10.3431 7.5 9 9.51472 9 12C9 14.4853 10.3431 16.5 12 16.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberCircleZero);
export default ForwardRef;
