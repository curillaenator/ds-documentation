import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Vibrate = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5001 8.25V15.75M22.5001 9.75V14.25M4.5 8.25V15.75M1.5 9.75V14.25M16.5 5.25V18.75C16.5 19.5784 15.8284 20.25 15 20.25H9C8.17157 20.25 7.5 19.5784 7.5 18.75V5.25C7.5 4.42157 8.17157 3.75 9 3.75H15C15.8284 3.75 16.5 4.42157 16.5 5.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Vibrate);
export default ForwardRef;
