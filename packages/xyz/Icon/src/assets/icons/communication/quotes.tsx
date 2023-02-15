import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Quotes = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M10.125 13.5H3.75C3.55109 13.5 3.36032 13.421 3.21967 13.2803C3.07902 13.1397 3 12.9489 3 12.75V6.75C3 6.55109 3.07902 6.36032 3.21967 6.21967C3.36032 6.07902 3.55109 6 3.75 6H9.375C9.57391 6 9.76468 6.07902 9.90533 6.21967C10.046 6.36032 10.125 6.55109 10.125 6.75V15C10.125 15.9946 9.72991 16.9484 9.02665 17.6517C8.32339 18.3549 7.36956 18.75 6.375 18.75M21 13.5H14.625C14.4261 13.5 14.2353 13.421 14.0947 13.2803C13.954 13.1397 13.875 12.9489 13.875 12.75V6.75C13.875 6.55109 13.954 6.36032 14.0947 6.21967C14.2353 6.07902 14.4261 6 14.625 6H20.25C20.4489 6 20.6397 6.07902 20.7803 6.21967C20.921 6.36032 21 6.55109 21 6.75V15C21 15.9946 20.6049 16.9484 19.9017 17.6517C19.1984 18.3549 18.2446 18.75 17.25 18.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Quotes);
export default ForwardRef;
