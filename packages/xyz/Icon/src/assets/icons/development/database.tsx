import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Database = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.25 7.5C20.25 9.98528 16.5564 12 12 12C7.44365 12 3.75 9.98528 3.75 7.5M20.25 7.5C20.25 5.01472 16.5564 3 12 3C7.44365 3 3.75 5.01472 3.75 7.5M20.25 7.5V12M3.75 7.5V12M3.75 12C3.75 14.4853 7.44365 16.5 12 16.5C16.5563 16.5 20.25 14.4853 20.25 12M3.75 12V16.5C3.75 18.9853 7.44365 21 12 21C16.5563 21 20.25 18.9853 20.25 16.5V12'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Database);
export default ForwardRef;
