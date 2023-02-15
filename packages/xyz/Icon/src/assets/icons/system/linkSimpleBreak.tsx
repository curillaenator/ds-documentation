import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LinkSimpleBreak = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M13.5905 16.7731L10.9388 19.4248C10.0949 20.2684 8.95035 20.7423 7.75701 20.7422C6.56367 20.7421 5.41924 20.268 4.57542 19.4242C3.7316 18.5804 3.2575 17.436 3.2574 16.2427C3.2573 15.0493 3.7312 13.9048 4.57488 13.0609L7.22652 10.4092M16.7728 13.5903L19.4245 10.9386C20.2682 10.0947 20.7421 8.95016 20.742 7.75682C20.7419 6.56348 20.2678 5.41904 19.4239 4.57522C18.5801 3.7314 17.4357 3.2573 16.2424 3.2572C15.049 3.2571 13.9045 3.731 13.0605 4.57468L10.4089 7.22633'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(LinkSimpleBreak);
export default ForwardRef;
