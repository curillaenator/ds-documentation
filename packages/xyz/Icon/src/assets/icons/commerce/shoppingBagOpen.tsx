import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ShoppingBagOpen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3 7.5H21M15.75 10.5C15.75 11.4946 15.3549 12.4484 14.6517 13.1517C13.9484 13.8549 12.9946 14.25 12 14.25C11.0054 14.25 10.0516 13.8549 9.34835 13.1517C8.64509 12.4484 8.25 11.4946 8.25 10.5M3.75 4.5H20.25C20.6642 4.5 21 4.83579 21 5.25V18.75C21 19.1642 20.6642 19.5 20.25 19.5H3.75C3.33579 19.5 3 19.1642 3 18.75V5.25C3 4.83579 3.33579 4.5 3.75 4.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ShoppingBagOpen);
export default ForwardRef;
