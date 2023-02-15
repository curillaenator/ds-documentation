import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ShieldSlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.13631 2.25L20.8636 21.75M8.5544 3.75H19.5001C19.699 3.75 19.8897 3.82902 20.0304 3.96967C20.171 4.11032 20.2501 4.30109 20.2501 4.5V10C20.2501 12.1198 19.7659 13.8581 19.0321 15.2753M17.2399 17.7638C15.2807 19.8001 12.9587 20.687 12.2303 20.9285C12.0811 20.9799 11.919 20.9799 11.7697 20.9285C10.4349 20.486 3.75 17.8764 3.75 10V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11033 3.82902 4.30109 3.75 4.5 3.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ShieldSlash);
export default ForwardRef;
