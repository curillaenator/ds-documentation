import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CopySimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.2493 17.2494V3.74927H6.74862M3.74866 6.74938H17.2492V20.2494H3.74866V6.74938Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CopySimple);
export default ForwardRef;
