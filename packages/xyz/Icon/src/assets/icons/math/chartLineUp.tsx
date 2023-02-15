import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChartLineUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21 19.5H3V4.5M19.5001 6L12.0001 13.5L9.00011 10.5L3.00011 16.5M19.5001 6L19.5001 9.75M19.5001 6H15.7501'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ChartLineUp);
export default ForwardRef;
