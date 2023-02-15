import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ArchiveTray = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.81808 11.068L12.0001 14.25M12.0001 14.25L15.182 11.068M12.0001 14.25L12 6.75M3.74954 15H7.18888C7.28737 15 7.3849 15.0194 7.47589 15.0571C7.56689 15.0948 7.64957 15.15 7.71921 15.2197L9.52987 17.0303C9.59952 17.1 9.68219 17.1552 9.77319 17.1929C9.86418 17.2306 9.96171 17.25 10.0602 17.25H13.9389C14.0374 17.25 14.1349 17.2306 14.2259 17.1929C14.3169 17.1552 14.3996 17.1 14.4692 17.0303L16.2799 15.2197C16.3495 15.15 16.4322 15.0948 16.5232 15.0571C16.6142 15.0194 16.7117 15 16.8102 15H20.2495M4.50002 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H4.50002C4.0858 20.25 3.75002 19.9142 3.75002 19.5V4.5C3.75002 4.08579 4.0858 3.75 4.50002 3.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ArchiveTray);
export default ForwardRef;
