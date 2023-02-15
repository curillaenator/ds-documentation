import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const EnvelopeSimpleOpen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3 9V18.75C3 18.9489 3.07902 19.1397 3.21967 19.2803C3.36032 19.421 3.55109 19.5 3.75 19.5H20.25C20.4489 19.5 20.6397 19.421 20.7803 19.2803C20.921 19.1397 21 18.9489 21 18.75V9M3 9L12 3L21 9M3 9L10.3636 14.25H13.6364L21 9'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(EnvelopeSimpleOpen);
export default ForwardRef;
