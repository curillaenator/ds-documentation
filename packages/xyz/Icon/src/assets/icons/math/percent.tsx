import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Percent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18.75 5.25L5.25 18.75M9.75 7.125C9.75 8.57475 8.57475 9.75 7.125 9.75C5.67525 9.75 4.5 8.57475 4.5 7.125C4.5 5.67525 5.67525 4.5 7.125 4.5C8.57475 4.5 9.75 5.67525 9.75 7.125ZM19.5 16.875C19.5 18.3247 18.3247 19.5 16.875 19.5C15.4253 19.5 14.25 18.3247 14.25 16.875C14.25 15.4253 15.4253 14.25 16.875 14.25C18.3247 14.25 19.5 15.4253 19.5 16.875Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Percent);
export default ForwardRef;
