import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MarkerCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 19.7964V16.5C16.5 16.3011 16.421 16.1103 16.2803 15.9697C16.1397 15.829 15.9489 15.75 15.75 15.75H8.25C8.05109 15.75 7.86032 15.829 7.71967 15.9697C7.57902 16.1103 7.5 16.3011 7.5 16.5V19.7967M9 15.75V13.5C9 13.3011 9.07902 13.1103 9.21967 12.9697C9.36032 12.829 9.55109 12.75 9.75 12.75H14.25C14.4489 12.75 14.6397 12.829 14.7803 12.9697C14.921 13.1103 15 13.3011 15 13.5V15.75M13.8598 12.75L12.7342 7.34704C12.5683 6.55099 11.4315 6.55099 11.2657 7.34704L10.1401 12.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(MarkerCircle);
export default ForwardRef;
