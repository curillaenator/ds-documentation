import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ElbowRightDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 15L16.5 19.5M16.5 19.5L21 15M16.5 19.5V6H3'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ElbowRightDown);
export default ForwardRef;
