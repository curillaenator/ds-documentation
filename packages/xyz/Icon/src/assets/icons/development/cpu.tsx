import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Cpu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5 9.75H21.75M19.5 14.25H21.75M2.25 9.75H4.5M2.25 14.25H4.5M14.25 19.5V21.75M9.75 19.5V21.75M14.25 2.25V4.5M9.75 2.25V4.5M9.375 9.375H14.625V14.625H9.375V9.375ZM5.25 4.5H18.75C19.1642 4.5 19.5 4.83579 19.5 5.25V18.75C19.5 19.1642 19.1642 19.5 18.75 19.5H5.25C4.83579 19.5 4.5 19.1642 4.5 18.75V5.25C4.5 4.83579 4.83579 4.5 5.25 4.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Cpu);
export default ForwardRef;
