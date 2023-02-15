import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Lock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.625 8.25V4.875C8.625 3.97989 8.98058 3.12145 9.61352 2.48851C10.2465 1.85558 11.1049 1.5 12 1.5C12.8951 1.5 13.7535 1.85558 14.3865 2.48851C15.0194 3.12145 15.375 3.97989 15.375 4.875V8.25M12 14.4H12.0012M4.5 8.25H19.5C19.9142 8.25 20.25 8.58579 20.25 9V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H4.5C4.08579 20.25 3.75 19.9142 3.75 19.5V9C3.75 8.58579 4.08579 8.25 4.5 8.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Lock);
export default ForwardRef;
