import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Wall = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 9.75V5.25M7.5 14.25V9.75M16.5 14.25V9.75M12 18.75V14.25M3 9.75H21M3 14.25H21M3 5.25H21V18.75H3V5.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Wall);
export default ForwardRef;
