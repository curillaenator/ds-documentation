import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Stack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3 16.5L12 21.75L21 16.5M3 12L12 17.25L21 12M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Stack);
export default ForwardRef;
