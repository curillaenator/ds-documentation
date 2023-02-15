import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FolderPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3 7.5V18.8077C3.00054 18.9911 3.07365 19.1669 3.20337 19.2966C3.33308 19.4264 3.50886 19.4995 3.69231 19.5H20.3333C20.5101 19.5 20.6797 19.4298 20.8047 19.3047C20.9298 19.1797 21 19.0101 21 18.8333V8.25C21 8.05109 20.921 7.86032 20.7803 7.71967C20.6397 7.57902 20.4489 7.5 20.25 7.5H3ZM3 7.5V5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H8.68934C8.78783 4.5 8.88536 4.5194 8.97635 4.55709C9.06735 4.59478 9.15003 4.65003 9.21967 4.71967L12 7.5M9.75 13.5H14.25M12 11.25V15.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FolderPlus);
export default ForwardRef;
