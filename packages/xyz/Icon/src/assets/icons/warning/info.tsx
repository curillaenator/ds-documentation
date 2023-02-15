import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Info = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.25 11.25H12.0001L12 16.5H12.75M12 7.92H12.0012M21.0001 12C21.0001 16.9706 16.9706 21 12.0001 21C7.0295 21 3.00006 16.9706 3.00006 12C3.00006 7.02944 7.0295 3 12.0001 3C16.9706 3 21.0001 7.02944 21.0001 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Info);
export default ForwardRef;
