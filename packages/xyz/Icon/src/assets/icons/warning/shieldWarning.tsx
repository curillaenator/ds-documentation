import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ShieldWarning = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.9999 8.25V12M12 15.36H12.0012M3.74992 10V4.5C3.74992 4.30109 3.82894 4.11032 3.96959 3.96967C4.11025 3.82902 4.30101 3.75 4.49992 3.75H19.4999C19.6988 3.75 19.8896 3.82902 20.0303 3.96967C20.1709 4.11032 20.2499 4.30109 20.2499 4.5V10C20.2499 17.8764 13.565 20.486 12.2302 20.9285C12.081 20.9798 11.9189 20.9798 11.7697 20.9285C10.4349 20.486 3.74992 17.8764 3.74992 10Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ShieldWarning);
export default ForwardRef;
