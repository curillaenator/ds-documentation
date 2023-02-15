import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ForkKnife = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.875 3V6.75M7.875 10.875V21M7.875 10.875C8.77011 10.875 9.62855 10.5194 10.2615 9.88649C10.8944 9.25355 11.25 8.39511 11.25 7.5L10.5 3M7.875 10.875C6.97989 10.875 6.12145 10.5194 5.48851 9.88649C4.85558 9.25355 4.5 8.39511 4.5 7.5L5.25 3M19.125 15H13.875C13.875 15 15 4.5 19.125 3V21'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ForkKnife);
export default ForwardRef;
