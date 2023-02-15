import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NewspaperClipping = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M13.5 10.5H18M13.5 13.5H18M3 20.25V5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H20.25C20.4489 4.5 20.6397 4.57902 20.7803 4.71967C20.921 4.86032 21 5.05109 21 5.25V20.25L18 18.75L15 20.25L12 18.75L9 20.25L6 18.75L3 20.25ZM6 9H10.5V15H6V9Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NewspaperClipping);
export default ForwardRef;
