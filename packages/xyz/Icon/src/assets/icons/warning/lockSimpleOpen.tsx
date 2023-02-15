import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LockSimpleOpen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.62457 8.25V4.875C8.62457 3.97989 8.98015 3.12145 9.61309 2.48851C10.246 1.85558 11.1045 1.5 11.9996 1.5C12.8947 1.5 13.7531 1.85558 14.3861 2.48851C15.019 3.12145 15.3746 3.97989 15.3746 4.875M4.49957 8.25H19.4996C19.9138 8.25 20.2496 8.58579 20.2496 9V19.5C20.2496 19.9142 19.9138 20.25 19.4996 20.25H4.49957C4.08536 20.25 3.74957 19.9142 3.74957 19.5V9C3.74957 8.58579 4.08536 8.25 4.49957 8.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(LockSimpleOpen);
export default ForwardRef;
