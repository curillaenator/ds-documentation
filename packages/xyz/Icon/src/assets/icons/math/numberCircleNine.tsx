import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberCircleNine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M14.2733 11.8131L11.25 16.8752M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM14.625 10.5C14.625 11.9497 13.4497 13.125 12 13.125C10.5503 13.125 9.375 11.9497 9.375 10.5C9.375 9.05025 10.5503 7.875 12 7.875C13.4497 7.875 14.625 9.05025 14.625 10.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberCircleNine);
export default ForwardRef;
