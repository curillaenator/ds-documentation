import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const OutLineHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 3.75V20.25M9 12H1.5M1.5 12L4.5 15M1.5 12L4.5 9M15 12H22.5M22.5 12L19.5 9M22.5 12L19.5 15'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(OutLineHorizontal);
export default ForwardRef;
