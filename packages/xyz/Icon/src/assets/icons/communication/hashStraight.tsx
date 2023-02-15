import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HashStraight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.75 9H20.25M3.75 15H20.25M15 3.75V20.25M9 3.75V20.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(HashStraight);
export default ForwardRef;
