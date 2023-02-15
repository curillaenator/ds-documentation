import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Power = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.9994 4.50024V11.6252M16.5002 5.08404C17.9907 6.05414 19.1279 7.47993 19.7422 9.14892C20.3565 10.8179 20.4151 12.6407 19.9091 14.3457C19.4031 16.0506 18.3598 17.5464 16.9345 18.6102C15.5093 19.6739 13.7784 20.2486 12 20.2486C10.2215 20.2486 8.4907 19.6739 7.06545 18.6101C5.64021 17.5464 4.59685 16.0506 4.0909 14.3456C3.58495 12.6407 3.64349 10.8179 4.2578 9.14888C4.8721 7.4799 6.00929 6.05411 7.49985 5.08402'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Power);
export default ForwardRef;
