import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BriefcaseMetal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.75 6.75V5.25C15.75 4.85218 15.592 4.47064 15.3107 4.18934C15.0294 3.90804 14.6478 3.75 14.25 3.75H9.75C9.35218 3.75 8.97064 3.90804 8.68934 4.18934C8.40804 4.47064 8.25 4.85218 8.25 5.25V6.75M3 16.5H21M3 10.5H21M3.75 6.75H20.25C20.6642 6.75 21 7.08579 21 7.5V19.5C21 19.9142 20.6642 20.25 20.25 20.25H3.75C3.33579 20.25 3 19.9142 3 19.5V7.5C3 7.08579 3.33579 6.75 3.75 6.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BriefcaseMetal);
export default ForwardRef;
