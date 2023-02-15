import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Dribbble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M6.65859 19.2442C7.99359 17.0326 9.87743 15.2034 12.1274 13.9341C14.3774 12.6648 16.9173 11.9985 19.5006 11.9998C20.0065 11.9998 20.5062 12.0244 20.9997 12.0738M17.6279 4.97754C16.2225 6.70486 14.4496 8.09691 12.4381 9.05228C10.4267 10.0076 8.22747 10.5023 6.00068 10.5001C5.05218 10.5005 4.10576 10.4115 3.17399 10.2342M8.05569 3.90791C10.3112 5.23135 12.1813 7.12173 13.4804 9.39137C14.7795 11.661 15.4623 14.231 15.4612 16.8461C15.462 18.0714 15.3131 19.2923 15.0176 20.4814M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Dribbble);
export default ForwardRef;
