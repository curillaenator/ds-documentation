import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Printer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M5.99956 7.5V3.75H17.9996V7.5M5.99956 16.5H2.62456V9C2.62456 8.17157 3.35209 7.5 4.24956 7.5H19.7496C20.647 7.5 21.3746 8.17157 21.3746 9V16.5H17.9996M17.52 10.8H17.5212M5.99956 14.25H17.9996V20.625H5.99956V14.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Printer);
export default ForwardRef;
