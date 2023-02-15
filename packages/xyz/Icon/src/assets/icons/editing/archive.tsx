import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Archive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.25 9V18C20.25 18.1989 20.171 18.3897 20.0303 18.5303C19.8897 18.671 19.6989 18.75 19.5 18.75H4.5C4.30109 18.75 4.11032 18.671 3.96967 18.5303C3.82902 18.3897 3.75 18.1989 3.75 18V9M9.75 12.75H14.25M3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6V8.25C21.75 8.66421 21.4142 9 21 9H3C2.58579 9 2.25 8.66421 2.25 8.25V6C2.25 5.58579 2.58579 5.25 3 5.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Archive);
export default ForwardRef;