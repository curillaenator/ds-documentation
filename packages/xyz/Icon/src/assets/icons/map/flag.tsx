import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Flag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.75001 20.2504V4.50044C9.75001 0.000435464 14.2499 9.0006 20.2499 4.5006V15.7506C14.2499 20.2506 9.74994 11.2506 3.74994 15.7506'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Flag);
export default ForwardRef;
