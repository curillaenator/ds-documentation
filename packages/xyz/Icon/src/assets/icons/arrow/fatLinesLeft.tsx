import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FatLinesLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.25 16.5V7.5M17.25 16.5V7.5M11.25 3L2.25 12L11.25 21V16.5H14.25V7.5H11.25V3Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FatLinesLeft);
export default ForwardRef;
