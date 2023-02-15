import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TextStrikethrough = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.75 12H20.25M7.1563 9.00028C7.07835 8.75789 7.03964 8.5046 7.04165 8.25C7.04165 6.17893 9.10051 4.5 12 4.5C14.2293 4.5 15.9616 5.49244 16.6434 6.89251M6.75 15.7499C6.75 17.821 9.1005 19.4999 12 19.4999C14.8995 19.4999 17.25 17.821 17.25 15.7499C17.25 13.5218 15.2229 12.6589 12.9753 11.9999'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(TextStrikethrough);
export default ForwardRef;
