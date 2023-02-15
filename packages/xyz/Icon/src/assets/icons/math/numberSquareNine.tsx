import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberSquareNine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M14.2733 11.8131L11.25 16.8752M4.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H4.5C4.08579 20.25 3.75 19.9142 3.75 19.5V4.5C3.75 4.08579 4.08579 3.75 4.5 3.75ZM14.625 10.5C14.625 11.9497 13.4497 13.125 12 13.125C10.5503 13.125 9.375 11.9497 9.375 10.5C9.375 9.05025 10.5503 7.875 12 7.875C13.4497 7.875 14.625 9.05025 14.625 10.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberSquareNine);
export default ForwardRef;
