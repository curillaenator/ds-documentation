import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChartBar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.375 19.5H2.625M9.375 19.5V8.25H14.625M4.125 19.5V12.75H9.375M14.625 3.75H19.875V19.5H14.625V3.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ChartBar);
export default ForwardRef;
