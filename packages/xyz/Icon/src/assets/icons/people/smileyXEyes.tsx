import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SmileyXEyes = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.25 9L14.25 12M17.25 12L14.25 9M9.75 9L6.75 12M9.75 12L6.75 9M12 16.8H12.0012M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SmileyXEyes);
export default ForwardRef;
