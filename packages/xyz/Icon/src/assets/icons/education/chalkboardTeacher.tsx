import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChalkboardTeacher = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.75 16.5C11.4069 16.5 12.75 15.1569 12.75 13.5C12.75 11.8431 11.4069 10.5 9.75 10.5C8.09315 10.5 6.75 11.8431 6.75 13.5C6.75 15.1569 8.09315 16.5 9.75 16.5ZM9.75 16.5C8.75636 16.5 7.78309 16.7819 6.94324 17.3129C6.10338 17.8439 5.43138 18.6022 5.00528 19.4999L3.75 19.5C3.65151 19.5 3.55399 19.4806 3.46299 19.4429C3.372 19.4053 3.28932 19.35 3.21967 19.2804C3.15003 19.2107 3.09478 19.1281 3.05709 19.0371C3.0194 18.9461 3 18.8486 3 18.7501V5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H20.25C20.4489 4.5 20.6397 4.57902 20.7803 4.71967C20.921 4.86032 21 5.05109 21 5.25V18.75C21 18.8485 20.9806 18.946 20.9429 19.037C20.9052 19.128 20.85 19.2107 20.7803 19.2803C20.7107 19.35 20.628 19.4052 20.537 19.4429C20.446 19.4806 20.3485 19.5 20.25 19.5L14.4947 19.4999C14.0686 18.6022 13.3966 17.8439 12.5568 17.3129C11.7169 16.7819 10.7436 16.5 9.75 16.5ZM16.5 16.5H18V7.5H6V9'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ChalkboardTeacher);
export default ForwardRef;