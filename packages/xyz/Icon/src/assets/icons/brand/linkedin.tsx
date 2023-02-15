import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Linkedin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.25 10.5001V16.5001M8.25 10.5001V16.5001M11.25 13.1251C11.25 12.429 11.5266 11.7613 12.0188 11.269C12.5111 10.7767 13.1788 10.5001 13.875 10.5001C14.5712 10.5001 15.2389 10.7767 15.7312 11.269C16.2234 11.7613 16.5 12.429 16.5 13.1251V16.5001M8.28 7.43906H8.2812M4.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H4.5C4.08579 20.25 3.75 19.9142 3.75 19.5V4.5C3.75 4.08579 4.08579 3.75 4.5 3.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Linkedin);
export default ForwardRef;
