import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Shield = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.75 10V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H19.5C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V10C20.25 17.8764 13.5651 20.486 12.2303 20.9285C12.0811 20.9798 11.9189 20.9798 11.7697 20.9285C10.4349 20.486 3.75 17.8764 3.75 10Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Shield);
export default ForwardRef;
