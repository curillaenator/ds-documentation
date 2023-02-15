import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberCircleSix = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.72664 12.1865L12.75 7.125M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM14.625 13.5C14.625 14.9497 13.4497 16.125 12 16.125C10.5503 16.125 9.375 14.9497 9.375 13.5C9.375 12.0503 10.5503 10.875 12 10.875C13.4497 10.875 14.625 12.0503 14.625 13.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberCircleSix);
export default ForwardRef;
