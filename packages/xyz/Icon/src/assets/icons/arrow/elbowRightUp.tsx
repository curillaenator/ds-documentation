import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ElbowRightUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 9L16.5 4.5M16.5 4.5L21 9M16.5 4.5V18H3'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ElbowRightUp);
export default ForwardRef;
