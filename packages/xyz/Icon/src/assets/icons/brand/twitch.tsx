import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Twitch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.75 8.25V12.75M11.25 8.25V12.75M15.4785 18.75H11.5215C11.3461 18.75 11.1762 18.8115 11.0414 18.9238L6.75 22.5V18.75H4.5C4.30109 18.75 4.11032 18.671 3.96967 18.5303C3.82902 18.3897 3.75 18.1989 3.75 18V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H19.5C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V14.6487C20.25 14.7587 20.2258 14.8673 20.1792 14.9668C20.1326 15.0664 20.0646 15.1545 19.9801 15.2249L15.9586 18.5762C15.8238 18.6885 15.6539 18.75 15.4785 18.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Twitch);
export default ForwardRef;
