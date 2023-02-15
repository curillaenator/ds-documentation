import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LockLaminatedOpen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.74956 11.25H20.2496M3.74956 14.25H20.2496M3.74956 17.25H20.2496M8.62456 8.25V4.875C8.62456 3.97989 8.98014 3.12145 9.61307 2.48851C10.246 1.85558 11.1045 1.5 11.9996 1.5C12.8947 1.5 13.7531 1.85558 14.386 2.48851C15.019 3.12145 15.3746 3.97989 15.3746 4.875M4.49956 8.25H19.4996C19.9138 8.25 20.2496 8.58579 20.2496 9V19.5C20.2496 19.9142 19.9138 20.25 19.4996 20.25H4.49956C4.08534 20.25 3.74956 19.9142 3.74956 19.5V9C3.74956 8.58579 4.08534 8.25 4.49956 8.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(LockLaminatedOpen);
export default ForwardRef;
