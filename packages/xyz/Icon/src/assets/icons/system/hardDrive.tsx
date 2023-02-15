import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HardDrive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.64 12H17.6412M3 6.75H21C21.4142 6.75 21.75 7.08579 21.75 7.5V16.5C21.75 16.9142 21.4142 17.25 21 17.25H3C2.58579 17.25 2.25 16.9142 2.25 16.5V7.5C2.25 7.08579 2.58579 6.75 3 6.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(HardDrive);
export default ForwardRef;
