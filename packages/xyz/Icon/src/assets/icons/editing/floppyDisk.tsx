import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FloppyDisk = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15 9.00103H9V3.75103M20.25 8.56066V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H15.4393C15.5378 3.75 15.6354 3.7694 15.7264 3.80709C15.8173 3.84478 15.9 3.90003 15.9697 3.96967L20.0303 8.03033C20.1 8.09997 20.1552 8.18265 20.1929 8.27365C20.2306 8.36464 20.25 8.46217 20.25 8.56066ZM14.6254 14.626C14.6254 16.0758 13.4502 17.251 12.0004 17.251C10.5507 17.251 9.37544 16.0758 9.37544 14.626C9.37544 13.1763 10.5507 12.001 12.0004 12.001C13.4502 12.001 14.6254 13.1763 14.6254 14.626Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FloppyDisk);
export default ForwardRef;
