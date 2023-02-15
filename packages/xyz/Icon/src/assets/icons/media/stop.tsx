import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Stop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18.4773 4.875H5.52273C5.165 4.875 4.875 5.165 4.875 5.52273V18.4773C4.875 18.835 5.165 19.125 5.52273 19.125H18.4773C18.835 19.125 19.125 18.835 19.125 18.4773V5.52273C19.125 5.165 18.835 4.875 18.4773 4.875Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Stop);
export default ForwardRef;
