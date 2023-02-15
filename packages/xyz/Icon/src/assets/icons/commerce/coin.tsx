import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Coin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.75 9.75C21.75 12.2353 17.3848 14.25 12 14.25M21.75 9.75C21.75 7.26472 17.3848 5.25 12 5.25C6.61522 5.25 2.25 7.26472 2.25 9.75M21.75 9.75V14.25C21.75 16.5 18 18.75 12 18.75M12 14.25C6.61522 14.25 2.25 12.2353 2.25 9.75M12 14.25V18.75M2.25 9.75V14.25C2.25 16.5 6 18.75 12 18.75M18 13.3223V17.8224M6 13.3223V17.8224'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Coin);
export default ForwardRef;
