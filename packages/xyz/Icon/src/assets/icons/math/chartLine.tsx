import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChartLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21 19.5H3V4.5M21.0001 9L15.0001 14.25L9.00011 9.75L3.00011 15'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ChartLine);
export default ForwardRef;
