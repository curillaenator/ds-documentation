import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TrendUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.7501 5.25L12.7501 14.25L9.00012 10.5L2.25012 17.25M21.7501 5.25L21.7502 11.25M21.7501 5.25H15.7502'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(TrendUp);
export default ForwardRef;
