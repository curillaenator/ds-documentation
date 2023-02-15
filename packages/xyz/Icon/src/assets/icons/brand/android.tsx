import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Android = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.3769 14.6667H16.3782M8.62308 14.6667H8.62437M2.80769 4.5L5.94483 7.73674M22.1924 4.5L19.0731 7.7184M2 18.6667V16.2843C2 10.2969 6.65974 5.35412 12.4629 5.3334C13.8449 5.32836 15.2142 5.60485 16.4924 6.14701C17.7706 6.68917 18.9325 7.48634 19.9115 8.49281C20.8904 9.49927 21.6672 10.6952 22.1972 12.0121C22.7272 13.3289 23 14.7408 23 16.1667V18.6667C23 18.8877 22.9149 19.0996 22.7634 19.2559C22.612 19.4122 22.4065 19.5 22.1923 19.5H2.80769C2.59348 19.5 2.38804 19.4122 2.23657 19.2559C2.0851 19.0996 2 18.8877 2 18.6667Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Android);
export default ForwardRef;
