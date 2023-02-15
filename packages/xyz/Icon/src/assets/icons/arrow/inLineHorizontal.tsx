import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const InLineHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 3.75V20.25M1.5 12H9M9 12L6 9M9 12L6 15M22.5 12H15M15 12L18 15M15 12L18 9'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(InLineHorizontal);
export default ForwardRef;
