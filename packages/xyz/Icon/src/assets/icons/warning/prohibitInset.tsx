import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ProhibitInset = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.34849 9.34848L14.6518 14.6518M21.0001 12.0005C21.0001 16.9711 16.9706 21.0005 12.0001 21.0005C7.02951 21.0005 3.00008 16.9711 3.00008 12.0005C3.00008 7.02993 7.02951 3.00049 12.0001 3.00049C16.9706 3.00049 21.0001 7.02993 21.0001 12.0005Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ProhibitInset);
export default ForwardRef;
