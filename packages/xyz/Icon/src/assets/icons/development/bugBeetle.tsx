import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BugBeetle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 21C15.7279 21 18.75 17.9779 18.75 14.25V9.74999C18.75 6.02208 15.7279 3 12 3C8.27208 3 5.25 6.02208 5.25 9.74999V14.25C5.25 17.9779 8.27209 21 12 21ZM12 21L12 12.75M18.75 12.75H21M3 12.75H5.25M3 15.75H5.41729M3 9.75H21M18.5827 15.75H21M5.24471 2.625L7.47271 4.74455M18.7434 2.625L16.5218 4.73844'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BugBeetle);
export default ForwardRef;
