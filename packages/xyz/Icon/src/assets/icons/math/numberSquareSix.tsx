import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberSquareSix = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.727 12.5625L12.7499 7.49934M4.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H4.5C4.08579 20.25 3.75 19.9142 3.75 19.5V4.5C3.75 4.08579 4.08579 3.75 4.5 3.75ZM14.625 13.875C14.625 15.3247 13.4497 16.5 12 16.5C10.5503 16.5 9.375 15.3247 9.375 13.875C9.375 12.4253 10.5503 11.25 12 11.25C13.4497 11.25 14.625 12.4253 14.625 13.875Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberSquareSix);
export default ForwardRef;
