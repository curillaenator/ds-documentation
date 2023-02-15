import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const AlignCenterVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.0003 12H18.7503M5.25038 12H3.00037M13.5005 12H10.5004M18.75 6.75V17.25C18.75 17.6642 18.4142 18 18 18H14.25C13.8358 18 13.5 17.6642 13.5 17.25V6.75C13.5 6.33579 13.8358 6 14.25 6H18C18.4142 6 18.75 6.33579 18.75 6.75ZM6.00002 3.75H9.75002C10.1642 3.75 10.5 4.08579 10.5 4.5V19.5C10.5 19.9142 10.1642 20.25 9.75002 20.25H6.00002C5.5858 20.25 5.25002 19.9142 5.25002 19.5V4.5C5.25002 4.08579 5.5858 3.75 6.00002 3.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(AlignCenterVertical);
export default ForwardRef;
