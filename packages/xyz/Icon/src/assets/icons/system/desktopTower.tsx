import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DesktopTower = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M10.5 17.25H3C2.60218 17.25 2.22064 17.092 1.93934 16.8107C1.65804 16.5294 1.5 16.1478 1.5 15.75V9C1.5 8.60218 1.65804 8.22064 1.93934 7.93934C2.22064 7.65804 2.60218 7.5 3 7.5H10.5M10.5 20.25H6M19.5 6.75H16.5M19.5 9.75H16.5M8.25 17.25V20.25M18 16.8H18.0012M14.25 3.75H21.75C22.1642 3.75 22.5 4.08579 22.5 4.5V19.5C22.5 19.9142 22.1642 20.25 21.75 20.25H14.25C13.8358 20.25 13.5 19.9142 13.5 19.5V4.5C13.5 4.08579 13.8358 3.75 14.25 3.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(DesktopTower);
export default ForwardRef;
