import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ListPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.75 6.00073H20.25M3.75 12.0007H20.25M3.75 18.0008H13.5M17.25 18.0008H21.75M19.5 15.7508V20.2508'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ListPlus);
export default ForwardRef;
