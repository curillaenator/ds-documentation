import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Martini = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 13.5L21.75 3.75H2.25L12 13.5ZM12 13.5V20.25M8.25 20.25H15.75M5.25 6.75H18.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Martini);
export default ForwardRef;
