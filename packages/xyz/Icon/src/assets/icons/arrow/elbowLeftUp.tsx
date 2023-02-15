import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ElbowLeftUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 9L7.5 4.5M7.5 4.5L3 9M7.5 4.5V18H21'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ElbowLeftUp);
export default ForwardRef;
