import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CornersIn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5 9H15V4.5M4.5 15H9V19.5M15 19.5V15H19.5M9 4.5V9H4.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CornersIn);
export default ForwardRef;
