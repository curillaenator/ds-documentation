import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CurrencyRub = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M5.25 16.5H13.5M8.25 20.25V3.75H13.875C15.1679 3.75 16.4079 4.26361 17.3221 5.17785C18.2364 6.09209 18.75 7.33207 18.75 8.625C18.75 9.91793 18.2364 11.1579 17.3221 12.0721C16.4079 12.9864 15.1679 13.5 13.875 13.5H5.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CurrencyRub);
export default ForwardRef;
