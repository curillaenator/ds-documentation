import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Door = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M2.25 21H21.75M5.25 21V3.75C5.25 3.55109 5.32902 3.36032 5.46967 3.21967C5.61032 3.07902 5.80109 3 6 3H18C18.1989 3 18.3897 3.07902 18.5303 3.21967C18.671 3.36032 18.75 3.55109 18.75 3.75V21'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Door);
export default ForwardRef;