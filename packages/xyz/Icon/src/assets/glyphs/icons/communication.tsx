import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Communication = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M2 9.44C2 8.09263 2 7.41895 2.31134 6.92835C2.46909 6.67977 2.67977 6.46909 2.92835 6.31134C3.41895 6 4.09263 6 5.44 6H14.56C15.9074 6 16.5811 6 17.0717 6.31134C17.3202 6.46909 17.5309 6.67977 17.6887 6.92835C18 7.41895 18 8.09263 18 9.44V17.9893C18 19.5268 18 20.2955 17.6562 20.5945C17.4786 20.7489 17.2521 20.8358 17.0168 20.8397C16.5612 20.8474 16.0471 20.2758 15.0189 19.1327C14.6033 18.6707 14.3955 18.4396 14.1385 18.2853C13.9993 18.2018 13.8505 18.1355 13.6952 18.0879C13.4087 18 13.0979 18 12.4764 18H5.44C4.09263 18 3.41895 18 2.92835 17.6887C2.67977 17.5309 2.46909 17.3202 2.31134 17.0717C2 16.5811 2 15.9074 2 14.56V9.44Z'
      fill='#60A5F9'
    />
    <path
      d='M22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z'
      fill='#93C4FC'
    />
    <path d='M6 14H14' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 14H14' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 10H14' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 10H14' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const ForwardRef = forwardRef(Communication);
export default ForwardRef;
