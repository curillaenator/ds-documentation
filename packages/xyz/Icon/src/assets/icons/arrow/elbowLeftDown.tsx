import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ElbowLeftDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 15L7.5 19.5M7.5 19.5L3 15M7.5 19.5V6H21'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ElbowLeftDown);
export default ForwardRef;
