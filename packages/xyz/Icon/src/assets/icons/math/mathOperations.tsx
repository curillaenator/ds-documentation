import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MathOperations = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.75 17.25H9.75M6.75 14.25V20.25M9.75 6.75H3.75M20.25 15.7563H14.25M20.25 18.7437H14.25M19.5 4.5L15 9M19.5 9L15 4.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(MathOperations);
export default ForwardRef;
