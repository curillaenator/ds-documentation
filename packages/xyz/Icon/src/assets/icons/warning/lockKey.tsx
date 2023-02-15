import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LockKey = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.9994 15C13.035 15 13.8744 14.1605 13.8744 13.125C13.8744 12.0895 13.035 11.25 11.9994 11.25C10.9639 11.25 10.1245 12.0895 10.1245 13.125C10.1245 14.1605 10.9639 15 11.9994 15ZM11.9994 15L11.9995 17.25M8.62448 8.25V4.875C8.62448 3.97989 8.98005 3.12145 9.61298 2.48851C10.2459 1.85558 11.1043 1.5 11.9994 1.5C12.8945 1.5 13.753 1.85558 14.3859 2.48851C15.0188 3.12145 15.3744 3.97989 15.3744 4.875V8.25M4.49951 8.25H19.4995C19.9137 8.25 20.2495 8.58579 20.2495 9V19.5C20.2495 19.9142 19.9137 20.25 19.4995 20.25H4.49951C4.0853 20.25 3.74951 19.9142 3.74951 19.5V9C3.74951 8.58579 4.0853 8.25 4.49951 8.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(LockKey);
export default ForwardRef;
