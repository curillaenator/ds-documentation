import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FatLineRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.75 16.5V7.5M12.75 3L21.75 12L12.75 21V16.5H6.75V7.5H12.75V3Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FatLineRight);
export default ForwardRef;
