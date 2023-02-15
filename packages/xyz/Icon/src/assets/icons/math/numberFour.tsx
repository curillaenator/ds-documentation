import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberFour = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.6247 2.25L7.125 15H16.125'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M16.125 9V21' stroke='currentColor' strokeWidth='inherit' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const ForwardRef = forwardRef(NumberFour);
export default ForwardRef;
