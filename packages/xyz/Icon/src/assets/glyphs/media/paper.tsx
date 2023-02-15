import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Paper = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 126 168' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M0 12C0 5.37259 5.37258 0 12 0H97L126 28.5V156C126 162.627 120.627 168 114 168H12C5.37258 168 0 162.627 0 156V12Z'
      fill='#FFF7ED'
    />
    <path
      d='M114 167H12C5.92487 167 1 162.075 1 156V12C1 5.92487 5.92487 1 12 1H96.5909L125 28.9193V156C125 162.075 120.075 167 114 167Z'
      stroke='#F97316'
      strokeWidth={2}
    />
    <path
      d='M98 2.38483L124.065 28H109C102.925 28 98 23.0751 98 17V2.38483Z'
      fill='#FED7AA'
      stroke='#F97316'
      strokeWidth={2}
    />
  </svg>
);

const ForwardRef = forwardRef(Paper);
export default ForwardRef;
