import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Play = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.3889 11.3595L7.8911 3.11059C7.77741 3.04111 7.64726 3.00318 7.51404 3.00068C7.38082 2.99819 7.24935 3.03123 7.13314 3.0964C7.01692 3.16157 6.92017 3.25653 6.85283 3.3715C6.7855 3.48647 6.75 3.61731 6.75 3.75055V20.2484C6.75 20.3817 6.7855 20.5125 6.85283 20.6275C6.92017 20.7424 7.01692 20.8374 7.13314 20.9026C7.24935 20.9677 7.38082 21.0008 7.51404 20.9983C7.64726 20.9958 7.77741 20.9579 7.8911 20.8884L21.3889 12.6394C21.4985 12.5724 21.5891 12.4784 21.652 12.3663C21.7148 12.2543 21.7478 12.128 21.7478 11.9995C21.7478 11.871 21.7148 11.7447 21.652 11.6326C21.5891 11.5206 21.4985 11.4265 21.3889 11.3595Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Play);
export default ForwardRef;
