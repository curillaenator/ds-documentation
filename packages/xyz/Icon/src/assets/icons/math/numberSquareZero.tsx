import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberSquareZero = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 16.5C13.6569 16.5 15 14.4853 15 12C15 9.51472 13.6569 7.5 12 7.5C10.3431 7.5 9 9.51472 9 12C9 14.4853 10.3431 16.5 12 16.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberSquareZero);
export default ForwardRef;
