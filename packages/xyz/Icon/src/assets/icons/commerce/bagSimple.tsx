import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BagSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.25 6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75M3.75 6.75H20.25C20.6642 6.75 21 7.08579 21 7.5V19.5C21 19.9142 20.6642 20.25 20.25 20.25H3.75C3.33579 20.25 3 19.9142 3 19.5V7.5C3 7.08579 3.33579 6.75 3.75 6.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BagSimple);
export default ForwardRef;
