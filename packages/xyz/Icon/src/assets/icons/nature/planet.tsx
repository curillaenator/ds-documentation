import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Planet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.2662 5.64954C19.8685 4.94141 21.8174 5.00444 22.3924 6.0003C23.4279 7.7939 19.6146 11.9342 13.8751 15.2479C8.13557 18.5616 2.64331 19.7939 1.60778 18.0003C1.03291 17.0046 1.95236 15.2857 3.86609 13.3865M20.25 12C20.25 16.5564 16.5564 20.25 12 20.25C7.44366 20.25 3.75001 16.5564 3.75001 12C3.75001 7.44365 7.44366 3.75 12 3.75C16.5564 3.75 20.25 7.44365 20.25 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Planet);
export default ForwardRef;
