import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CreditCard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.7496 15.75H18.7496M11.2496 15.75H12.7496M2.24953 9.07961H21.7495M3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6V18C21.75 18.4142 21.4142 18.75 21 18.75H3C2.58579 18.75 2.25 18.4142 2.25 18V6C2.25 5.58579 2.58579 5.25 3 5.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CreditCard);
export default ForwardRef;
