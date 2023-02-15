import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Laptop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.75 16.5V6.75C3.75 6.35218 3.90804 5.97064 4.18934 5.68934C4.47064 5.40804 4.85218 5.25 5.25 5.25H18.75C19.1478 5.25 19.5294 5.40804 19.8107 5.68934C20.092 5.97064 20.25 6.35218 20.25 6.75V16.5M13.5 8.25H10.5M2.25 16.5H21.75V18C21.75 18.3978 21.592 18.7794 21.3107 19.0607C21.0294 19.342 20.6478 19.5 20.25 19.5H3.75C3.35218 19.5 2.97064 19.342 2.68934 19.0607C2.40804 18.7794 2.25 18.3978 2.25 18V16.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Laptop);
export default ForwardRef;
