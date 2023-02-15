import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Hash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M4.09105 9H21.0001M16.5 3.75L13.5 20.25M10.5 3.75L7.5 20.25M3 15H19.9091'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Hash);
export default ForwardRef;
