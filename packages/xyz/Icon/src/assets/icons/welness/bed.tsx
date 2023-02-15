import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Bed = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.75 15.75V7.5M9.75 7.5H19.5C20.2957 7.5 21.0587 7.81607 21.6213 8.37868C22.1839 8.94129 22.5 9.70435 22.5 10.5V15.75M9.75 7.5H1.5M22.5 15.75H1.5M22.5 15.75V19.5M1.5 19.5V4.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Bed);
export default ForwardRef;
