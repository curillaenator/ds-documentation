import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ImageSquare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.25 15L16.2803 11.0304C16.1397 10.8897 15.9489 10.8107 15.75 10.8107C15.5511 10.8107 15.3603 10.8897 15.2197 11.0304L11.0303 15.2197C10.8897 15.3604 10.6989 15.4394 10.5 15.4394C10.3011 15.4394 10.1103 15.3604 9.96967 15.2197L8.03033 13.2804C7.88967 13.1397 7.69891 13.0607 7.5 13.0607C7.30108 13.0607 7.11032 13.1397 6.96967 13.2804L3.75 16.5M9.35977 8.64H9.36097M4.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H4.5C4.08579 20.25 3.75 19.9142 3.75 19.5V4.5C3.75 4.08579 4.08579 3.75 4.5 3.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ImageSquare);
export default ForwardRef;
