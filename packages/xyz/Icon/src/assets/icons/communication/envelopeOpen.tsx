import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const EnvelopeOpen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21 9V18.75C21 18.9489 20.921 19.1397 20.7803 19.2803C20.6397 19.421 20.4489 19.5 20.25 19.5H3.75C3.55109 19.5 3.36032 19.421 3.21967 19.2803C3.07902 19.1397 3 18.9489 3 18.75V9M21 9L12 3L3 9M21 9L13.6364 14.25M3 9L10.3637 14.25M10.3637 14.25L3.23134 19.288M10.3637 14.25H13.6364M20.7689 19.2881L13.6364 14.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(EnvelopeOpen);
export default ForwardRef;
