import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PresentationChart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15 17.25L18 21M9 17.25L6 21M9 11.25V13.5M12 9.75V13.5M15 8.25V13.5M12 4.5V2.25M3.75 4.5H20.25C20.6642 4.5 21 4.83579 21 5.25V16.5C21 16.9142 20.6642 17.25 20.25 17.25H3.75C3.33579 17.25 3 16.9142 3 16.5V5.25C3 4.83579 3.33579 4.5 3.75 4.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(PresentationChart);
export default ForwardRef;
