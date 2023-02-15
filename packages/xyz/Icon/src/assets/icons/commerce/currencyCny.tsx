import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CurrencyCny = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M6 6H18M4.5 11.25H19.5M14.25 11.25V16.5C14.25 17.0967 14.4871 17.669 14.909 18.091C15.331 18.5129 15.9033 18.75 16.5 18.75H20.25V16.5M9.75 11.25V12.75C9.75 14.3413 9.11786 15.8674 7.99264 16.9926C6.86742 18.1179 5.3413 18.75 3.75 18.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CurrencyCny);
export default ForwardRef;
