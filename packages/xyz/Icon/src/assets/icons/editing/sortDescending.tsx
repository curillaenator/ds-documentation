import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SortDescending = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M13.5 8.2493L17.25 4.49927M17.25 4.49927L20.9999 8.24865M17.25 4.49927L17.25 13.4993M4.5 11.9992H11.2499M4.5 5.99923H9.74991M4.5 17.9992H17.2499'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SortDescending);
export default ForwardRef;
