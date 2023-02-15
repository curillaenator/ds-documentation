import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const GraduationCap = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.675 22.5V12L12.05 9M20.675 10.3999V15.5112C20.6753 15.673 20.623 15.8305 20.526 15.96C19.8944 16.8004 17.23 19.875 12.05 19.875C6.87003 19.875 4.20557 16.8004 3.57401 15.96C3.47698 15.8305 3.42468 15.673 3.42499 15.5112V10.3999M0.799988 9L12.05 3L23.3 9L12.05 15L0.799988 9Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(GraduationCap);
export default ForwardRef;
