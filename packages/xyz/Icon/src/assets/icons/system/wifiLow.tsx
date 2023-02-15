import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const WifiLow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.7113 15.5685C9.59696 14.7225 10.7746 14.2505 11.9994 14.2505C13.2241 14.2505 14.4017 14.7225 15.2874 15.5685M12 18.7201H12.0012'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(WifiLow);
export default ForwardRef;
