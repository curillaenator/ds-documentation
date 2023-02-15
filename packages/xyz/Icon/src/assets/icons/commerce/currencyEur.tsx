import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CurrencyEur = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.523 18.273C16.579 19.217 15.3762 19.8599 14.0669 20.1203C12.7575 20.3808 11.4003 20.2471 10.1669 19.7362C8.93348 19.2253 7.87928 18.3601 7.13758 17.2501C6.39588 16.1401 6 14.835 6 13.5V10.5C6 9.16498 6.39588 7.85994 7.13758 6.7499C7.87928 5.63987 8.93348 4.77471 10.1669 4.26382C11.4003 3.75292 12.7575 3.61925 14.0669 3.8797C15.3762 4.14015 16.579 4.78303 17.523 5.72703M3.75 10.5H12.75M3.75 13.5H11.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CurrencyEur);
export default ForwardRef;
