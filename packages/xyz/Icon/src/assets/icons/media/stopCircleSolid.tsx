import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const StopCircleSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7471 9.41504 20.7189 6.93679 18.8911 5.10894C17.0632 3.28109 14.585 2.25293 12 2.25ZM15 14.25C15 14.4489 14.921 14.6397 14.7803 14.7803C14.6397 14.921 14.4489 15 14.25 15H9.75C9.55109 15 9.36033 14.921 9.21968 14.7803C9.07902 14.6397 9.00001 14.4489 9 14.25V9.75C9.00001 9.55109 9.07902 9.36032 9.21968 9.21967C9.36033 9.07902 9.55109 9 9.75 9H14.25C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75V14.25Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(StopCircleSolid);
export default ForwardRef;
