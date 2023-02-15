import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Critical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.29216 10.7437C5.07374 7.26028 8.33802 5 12 5C15.6659 5 18.9271 7.26014 20.7079 10.7434C21.0974 11.5053 21.0974 12.4947 20.7079 13.2566C18.9271 16.7398 15.6659 19 12 19C8.33803 19 5.07375 16.7397 3.29217 13.2563C2.90261 12.4946 2.90261 11.5054 3.29216 10.7437Z'
      stroke='#FCB974'
      strokeWidth={2}
    />
    <path
      d='M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z'
      fill='#FB923C'
    />
  </svg>
);

const ForwardRef = forwardRef(Critical);
export default ForwardRef;
