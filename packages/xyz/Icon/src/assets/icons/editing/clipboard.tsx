import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Clipboard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.0002 3.75H18.75C18.9489 3.75 19.1397 3.82902 19.2803 3.96967C19.421 4.11032 19.5 4.30109 19.5 4.5V20.25C19.5 20.4489 19.421 20.6397 19.2803 20.7803C19.1397 20.921 18.9489 21 18.75 21H5.25C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25V4.5C4.5 4.30109 4.57902 4.11032 4.71967 3.96967C4.86032 3.82902 5.05109 3.75 5.25 3.75H8.9998M8.25 6.75V6C8.25 5.00544 8.64509 4.05161 9.34835 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9946 2.25 13.9484 2.64509 14.6517 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6V6.75H8.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Clipboard);
export default ForwardRef;
