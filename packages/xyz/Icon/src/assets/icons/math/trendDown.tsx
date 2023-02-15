import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TrendDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.7501 18.75L12.7501 9.75L9.00012 13.5L2.25012 6.75M21.7501 18.75L21.7502 12.75M21.7501 18.75H15.7502'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(TrendDown);
export default ForwardRef;
