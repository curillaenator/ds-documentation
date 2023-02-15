import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SpinnerGap = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 3V6M21 12H18M18.3639 18.3641L16.2426 16.2428M12 21V18M5.63617 18.3641L7.75746 16.2428M3 12H6M5.63617 5.63595L7.75746 7.75723'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SpinnerGap);
export default ForwardRef;
