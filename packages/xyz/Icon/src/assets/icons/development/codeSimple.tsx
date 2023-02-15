import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CodeSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.25 6L1.5 12L8.25 18M15.75 6L22.5 12L15.75 18'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CodeSimple);
export default ForwardRef;
