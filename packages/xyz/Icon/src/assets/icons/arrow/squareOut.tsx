import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SquareOut = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.25 9.375L20.2493 3.75075L14.625 3.75M13.4972 10.503L20.2472 3.753M17.25 13.5V19.5C17.25 19.6989 17.171 19.8897 17.0303 20.0303C16.8897 20.171 16.6989 20.25 16.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V7.5C3.75 7.30109 3.82902 7.11032 3.96967 6.96967C4.11032 6.82902 4.30109 6.75 4.5 6.75H10.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SquareOut);
export default ForwardRef;
