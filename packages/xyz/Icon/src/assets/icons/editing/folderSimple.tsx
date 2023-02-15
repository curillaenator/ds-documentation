import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FolderSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21 8.25V18.8333C21 19.0101 20.9298 19.1797 20.8047 19.3047C20.6797 19.4298 20.5101 19.5 20.3333 19.5H3.75C3.55109 19.5 3.36032 19.421 3.21967 19.2803C3.07902 19.1397 3 18.9489 3 18.75V6C3 5.80109 3.07902 5.61032 3.21967 5.46967C3.36032 5.32902 3.55109 5.25 3.75 5.25H8.75C8.91228 5.25 9.07018 5.30263 9.2 5.4L11.8 7.35C11.9298 7.44737 12.0877 7.5 12.25 7.5H20.25C20.4489 7.5 20.6397 7.57902 20.7803 7.71967C20.921 7.86032 21 8.05109 21 8.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FolderSimple);
export default ForwardRef;