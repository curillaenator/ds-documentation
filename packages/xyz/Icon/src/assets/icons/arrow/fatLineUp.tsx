import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FatLineUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 20.25H7.5M3 11.25L12 2.25L21 11.25H16.5V17.25H7.5V11.25H3Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FatLineUp);
export default ForwardRef;
