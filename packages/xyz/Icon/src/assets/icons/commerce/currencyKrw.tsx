import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CurrencyKrw = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M1.5 12.75H22.5M2.25 6.75L7.125 18.75L12 6.75L16.875 18.75L21.75 6.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CurrencyKrw);
export default ForwardRef;
