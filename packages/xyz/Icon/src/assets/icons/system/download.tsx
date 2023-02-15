import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Download = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 12H21C21.1989 12 21.3897 12.079 21.5303 12.2197C21.671 12.3603 21.75 12.5511 21.75 12.75V18.75C21.75 18.9489 21.671 19.1397 21.5303 19.2803C21.3897 19.421 21.1989 19.5 21 19.5H3C2.80109 19.5 2.61032 19.421 2.46967 19.2803C2.32902 19.1397 2.25 18.9489 2.25 18.75V12.75C2.25 12.5511 2.32902 12.3603 2.46967 12.2197C2.61032 12.079 2.80109 12 3 12H7.5M12 2.25V12M12 12L7.5 7.5M12 12L16.5 7.5M17.52 15.8391H17.5212'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Download);
export default ForwardRef;
