import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ClockwiseLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.48413 9.34864H2.98413M2.98413 9.34864V4.84867M2.98413 9.34864L6.16617 6.16637C7.31995 5.01259 8.78996 4.22685 10.3903 3.90853C11.9906 3.5902 13.6494 3.75357 15.1569 4.378C16.6644 5.00242 17.9529 6.05984 18.8594 7.41655C19.7659 8.77325 20.2498 10.3683 20.2498 12C20.2498 13.6317 19.7659 15.2268 18.8594 16.5835C17.9529 17.9402 16.6644 18.9976 15.1569 19.622C13.6494 20.2464 11.9906 20.4098 10.3903 20.0915C8.78996 19.7732 7.31995 18.9874 6.16617 17.8336'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ClockwiseLeft);
export default ForwardRef;
