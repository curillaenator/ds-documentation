import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ClockwiseRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5147 9.34864H21.0147M21.0147 9.34864V4.84867M21.0147 9.34864L17.8336 6.16637C16.6798 5.01259 15.2098 4.22685 13.6095 3.90853C12.0092 3.5902 10.3504 3.75357 8.84286 4.378C7.33537 5.00242 6.0469 6.05984 5.14038 7.41655C4.23385 8.77325 3.75 10.3683 3.75 12C3.75 13.6317 4.23385 15.2268 5.14038 16.5835C6.0469 17.9402 7.33537 18.9976 8.84286 19.622C10.3504 20.2464 12.0092 20.4098 13.6095 20.0915C15.2098 19.7732 16.6798 18.9874 17.8336 17.8336'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ClockwiseRight);
export default ForwardRef;
