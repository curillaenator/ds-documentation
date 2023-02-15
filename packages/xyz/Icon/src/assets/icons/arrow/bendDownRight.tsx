import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BendDownRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 9.75L21 14.25M21 14.25L16.5 18.75M21 14.25H12C9.61305 14.25 7.32387 13.3018 5.63604 11.614C3.94821 9.92613 3 7.63695 3 5.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BendDownRight);
export default ForwardRef;
