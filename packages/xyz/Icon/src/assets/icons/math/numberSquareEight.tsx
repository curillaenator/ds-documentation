import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberSquareEight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M14.0625 9.5625C14.0625 10.0397 13.897 10.5021 13.5943 10.8709C13.2916 11.2398 12.8704 11.4923 12.4024 11.5854C11.9344 11.6785 11.4486 11.6064 11.0277 11.3815C10.6069 11.1565 10.2771 10.7926 10.0945 10.3518C9.91189 9.91094 9.8878 9.42041 10.0263 8.96379C10.1648 8.50717 10.4574 8.1127 10.8541 7.8476C11.2509 7.5825 11.7273 7.46316 12.2022 7.50993C12.677 7.55671 13.121 7.76669 13.4584 8.1041C13.6502 8.2954 13.8023 8.52273 13.906 8.77302C14.0097 9.0233 14.0629 9.2916 14.0625 9.5625Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.4375 14.0625C14.4375 14.6264 14.242 15.1729 13.8842 15.6088C13.5265 16.0448 13.0286 16.3431 12.4755 16.4532C11.9224 16.5632 11.3483 16.478 10.851 16.2122C10.3536 15.9464 9.96385 15.5163 9.74804 14.9953C9.53224 14.4743 9.50376 13.8946 9.66746 13.3549C9.83116 12.8153 10.1769 12.3491 10.6458 12.0358C11.1147 11.7225 11.6777 11.5815 12.2389 11.6367C12.8001 11.692 13.3248 11.9402 13.7236 12.3389C13.9503 12.565 14.13 12.8337 14.2525 13.1295C14.3751 13.4253 14.4379 13.7423 14.4375 14.0625Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberSquareEight);
export default ForwardRef;
