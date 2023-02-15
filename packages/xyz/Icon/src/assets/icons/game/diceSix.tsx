import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DiceSix = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.64023 12H8.64143M8.64023 16.08H8.64143M8.64023 7.91953H8.64143M15.36 12H15.3612M15.36 16.0805H15.3612M15.36 7.91953H15.3612M6 3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V18C20.25 19.2426 19.2426 20.25 18 20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V6C3.75 4.75736 4.75736 3.75 6 3.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(DiceSix);
export default ForwardRef;
