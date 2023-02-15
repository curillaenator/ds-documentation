import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Backspace = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15 9.75L10.5 14.25M15 14.25L10.5 9.75M5.78152 19.1359L1.5 12L5.78152 4.86412C5.84816 4.75307 5.94242 4.66116 6.05512 4.59735C6.16782 4.53354 6.29513 4.5 6.42464 4.5H20.25C20.4489 4.5 20.6397 4.57902 20.7803 4.71967C20.921 4.86032 21 5.05109 21 5.25V18.75C21 18.9489 20.921 19.1397 20.7803 19.2803C20.6397 19.421 20.4489 19.5 20.25 19.5H6.42464C6.29513 19.5 6.16782 19.4665 6.05512 19.4027C5.94242 19.3388 5.84816 19.2469 5.78152 19.1359Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Backspace);
export default ForwardRef;
