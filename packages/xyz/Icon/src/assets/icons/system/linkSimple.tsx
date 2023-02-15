import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LinkSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.8174 15.1817L15.1813 8.81775M13.5905 16.7731L10.9388 19.4248C10.0948 20.2684 8.95033 20.7423 7.75698 20.7422C6.56364 20.7421 5.41921 20.268 4.57539 19.4242C3.73157 18.5804 3.25747 17.436 3.25737 16.2427C3.25727 15.0493 3.73117 13.9048 4.57484 13.0609L7.22649 10.4092M16.7728 13.5903L19.4245 10.9386C20.2682 10.0947 20.7421 8.95016 20.742 7.75682C20.7419 6.56348 20.2678 5.41904 19.4239 4.57522C18.5801 3.7314 17.4357 3.2573 16.2424 3.2572C15.049 3.2571 13.9045 3.731 13.0605 4.57468L10.4089 7.22633'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(LinkSimple);
export default ForwardRef;
