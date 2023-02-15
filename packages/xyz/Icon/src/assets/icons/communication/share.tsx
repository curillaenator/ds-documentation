import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Share = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 14.25L21 9.75M21 9.75L16.5 5.25M21 9.75H15.7502C13.7547 9.75015 11.8158 10.4132 10.2381 11.635C8.66039 12.8567 7.53325 14.568 7.03374 16.5M18 20.25H3.75C3.55109 20.25 3.36032 20.171 3.21967 20.0303C3.07902 19.8897 3 19.6989 3 19.5V8.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Share);
export default ForwardRef;
