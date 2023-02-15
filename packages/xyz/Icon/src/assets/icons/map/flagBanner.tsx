import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FlagBanner = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.75 20.25V4.5H21L16.5 10.125L21 15.75H3.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FlagBanner);
export default ForwardRef;
