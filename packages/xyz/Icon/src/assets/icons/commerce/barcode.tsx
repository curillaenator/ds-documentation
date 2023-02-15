import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Barcode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.25 4.5H21V8.25M6.75 19.5H3V15.75M21 15.75V19.5H17.25M3 8.25V4.5H6.75M7.5 8.25V15.75M16.5 8.25V15.75M13.5 8.25V15.75M10.5 8.25V15.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Barcode);
export default ForwardRef;
