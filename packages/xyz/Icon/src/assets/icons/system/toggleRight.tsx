import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ToggleRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 6H7.5C4.1863 6 1.50001 8.6863 1.50001 12C1.50001 15.3137 4.1863 18 7.5 18H16.5C19.8137 18 22.5 15.3137 22.5 12C22.5 8.68629 19.8137 6 16.5 6Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.5 15C18.1569 15 19.5 13.6569 19.5 12C19.5 10.3431 18.1569 9 16.5 9C14.8431 9 13.5 10.3431 13.5 12C13.5 13.6569 14.8431 15 16.5 15Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ToggleRight);
export default ForwardRef;
