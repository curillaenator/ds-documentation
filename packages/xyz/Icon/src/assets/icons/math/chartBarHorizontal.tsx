import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChartBarHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.75 20.25V3.75M3.75 5.25H15.75V9.75M12.75 14.25V18.75H3.75M3.75 9.75H20.25V14.25H3.75V9.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ChartBarHorizontal);
export default ForwardRef;
