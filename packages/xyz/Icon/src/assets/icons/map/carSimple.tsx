import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CarSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M1.5 11.25H22.5M20.25 20.25H18C17.8011 20.25 17.6103 20.171 17.4697 20.0303C17.329 19.8897 17.25 19.6989 17.25 19.5V17.25H6.75V19.5C6.75 19.6989 6.67098 19.8897 6.53033 20.0303C6.38968 20.171 6.19891 20.25 6 20.25H3.75C3.55109 20.25 3.36032 20.171 3.21967 20.0303C3.07902 19.8897 3 19.6989 3 19.5V11.25L5.80205 4.9454C5.86097 4.81282 5.95707 4.70018 6.07872 4.62113C6.20037 4.54208 6.34233 4.5 6.48741 4.5H17.5126C17.6577 4.5 17.7996 4.54208 17.9213 4.62113C18.0429 4.70018 18.139 4.81282 18.198 4.9454L21 11.25V19.5C21 19.6989 20.921 19.8897 20.7803 20.0303C20.6397 20.171 20.4489 20.25 20.25 20.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CarSimple);
export default ForwardRef;