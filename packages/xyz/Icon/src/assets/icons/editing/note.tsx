import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Note = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9 9H15M9 12H15M9 15H12M20.1822 14.9991H15V20.1816M14.6893 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H19.5C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V14.6893C20.25 14.7878 20.2306 14.8854 20.1929 14.9764C20.1552 15.0673 20.1 15.15 20.0303 15.2197L15.2197 20.0303C15.15 20.1 15.0673 20.1552 14.9764 20.1929C14.8854 20.2306 14.7878 20.25 14.6893 20.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Note);
export default ForwardRef;
