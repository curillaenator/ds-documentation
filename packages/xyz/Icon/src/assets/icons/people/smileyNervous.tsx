import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SmileyNervous = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.5 16.125L9 14.25L10.5 16.125L12 14.25L13.5 16.125L15 14.25L16.5 16.125M15.3598 10.0805H15.361M8.64 10.0805H8.6412M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SmileyNervous);
export default ForwardRef;
