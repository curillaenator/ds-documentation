import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Activity = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M2.25012 12H5.25012L9.00012 3.75L15.0001 19.5L18.7501 12H21.7501'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Activity);
export default ForwardRef;
