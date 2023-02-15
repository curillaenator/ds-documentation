import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CurrencyInr = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M6.75 7.5H18.75M6.75 3.75H18.75M10.125 3.75C11.4179 3.75 12.6579 4.26361 13.5721 5.17785C14.4864 6.09209 15 7.33207 15 8.625C15 9.91793 14.4864 11.1579 13.5721 12.0721C12.6579 12.9864 11.4179 13.5 10.125 13.5H6.75L15 21'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CurrencyInr);
export default ForwardRef;
