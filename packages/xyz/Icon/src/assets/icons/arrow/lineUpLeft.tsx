import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LineUpLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 15.75L6 5.25M6 5.25V14.625M6 5.25H15.375M20.25 20.2496H3.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(LineUpLeft);
export default ForwardRef;
