import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const StopSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18.4773 4.125H5.52274C4.75079 4.125 4.125 4.75079 4.125 5.52274V18.4773C4.125 19.2492 4.75079 19.875 5.52274 19.875H18.4773C19.2492 19.875 19.875 19.2492 19.875 18.4773V5.52274C19.875 4.75079 19.2492 4.125 18.4773 4.125Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(StopSolid);
export default ForwardRef;
