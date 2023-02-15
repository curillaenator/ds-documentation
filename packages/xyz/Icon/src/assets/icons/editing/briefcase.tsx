import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Briefcase = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.75 6.75V5.25C15.75 4.85218 15.592 4.47064 15.3107 4.18934C15.0293 3.90804 14.6478 3.75 14.25 3.75H9.74999C9.35217 3.75 8.97064 3.90804 8.68933 4.18934C8.40803 4.47064 8.24999 4.85218 8.24999 5.25V6.75M21.0006 11.8414C18.2653 13.4239 15.16 14.2548 11.9999 14.2499C8.84026 14.2548 5.73551 13.4242 3.00049 11.8422M10.875 11.25H13.125M3.75058 6.75H20.2506C20.6648 6.75 21.0006 7.08579 21.0006 7.5V19.5C21.0006 19.9142 20.6648 20.25 20.2506 20.25H3.75058C3.33637 20.25 3.00058 19.9142 3.00058 19.5V7.5C3.00058 7.08579 3.33637 6.75 3.75058 6.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Briefcase);
export default ForwardRef;
