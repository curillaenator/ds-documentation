import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const UpSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.0303 14.4697L12.5303 6.96966C12.3897 6.82901 12.1989 6.75 12 6.75C11.8011 6.75 11.6103 6.82901 11.4697 6.96966L3.96968 14.4697C3.86479 14.5745 3.79336 14.7082 3.76441 14.8537C3.73547 14.9992 3.75032 15.15 3.80709 15.287C3.86385 15.424 3.95998 15.5412 4.08332 15.6236C4.20666 15.706 4.35167 15.75 4.5 15.75H19.5C19.6483 15.75 19.7933 15.706 19.9167 15.6236C20.04 15.5412 20.1362 15.424 20.1929 15.287C20.2497 15.15 20.2645 14.9992 20.2356 14.8537C20.2067 14.7082 20.1352 14.5745 20.0303 14.4697Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(UpSolid);
export default ForwardRef;
