import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FatRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.75 3L21.75 12L12.75 21V16.5H4.5C4.30109 16.5 4.11032 16.421 3.96967 16.2803C3.82902 16.1397 3.75 15.9489 3.75 15.75V8.25C3.75 8.05109 3.82902 7.86032 3.96967 7.71967C4.11032 7.57902 4.30109 7.5 4.5 7.5H12.75V3Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FatRight);
export default ForwardRef;