import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FatLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.25 3L2.25 12L11.25 21V16.5H19.5C19.6989 16.5 19.8897 16.421 20.0303 16.2803C20.171 16.1397 20.25 15.9489 20.25 15.75V8.25C20.25 8.05109 20.171 7.86032 20.0303 7.71967C19.8897 7.57902 19.6989 7.5 19.5 7.5H11.25V3Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FatLeft);
export default ForwardRef;
