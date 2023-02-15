import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CornersOut = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.75 4.5H19.5V8.25M8.25 19.5H4.5V15.75M19.5 15.75V19.5H15.75M4.5 8.25V4.5H8.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CornersOut);
export default ForwardRef;
