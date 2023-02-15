import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Logic = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 6.5C12 8.98528 9.98528 11 7.5 11C5.01472 11 3 8.98528 3 6.5C3 4.01472 5.01472 2 7.5 2C9.98528 2 12 4.01472 12 6.5Z'
      fill='#93C4FC'
    />
    <path
      d='M18.5 10.634C19.1667 11.0189 19.1667 11.9811 18.5 12.366L10.25 17.1292C9.58333 17.5141 8.75 17.0329 8.75 16.2631V6.73685C8.75 5.96705 9.58333 5.48592 10.25 5.87082L18.5 10.634Z'
      fill='#60A5F9'
    />
    <path
      d='M20 22H14C13.4477 22 13 21.5523 13 21V15C13 14.4477 13.4477 14 14 14H20C20.5523 14 21 14.4477 21 15V21C21 21.5523 20.5523 22 20 22Z'
      fill='#93C4FC'
    />
    <path
      d='M19 18C19 19.1046 18.1046 20 17 20C15.8954 20 15 19.1046 15 18C15 16.8954 15.8954 16 17 16C18.1046 16 19 16.8954 19 18Z'
      fill='white'
    />
  </svg>
);

const ForwardRef = forwardRef(Logic);
export default ForwardRef;
