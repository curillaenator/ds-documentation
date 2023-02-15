import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SortAscending = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M13.5 15.7493L17.25 19.4993M17.25 19.4993L20.9999 15.7498M17.25 19.4993L17.25 10.4993M4.5 11.9993H11.2499M4.5 5.99927H17.2499M4.5 17.9993H9.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SortAscending);
export default ForwardRef;
