import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Columns = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M10.5 19.5V4.5C10.5 4.08579 10.1642 3.75 9.75 3.75H6C5.58579 3.75 5.25 4.08579 5.25 4.5V19.5C5.25 19.9142 5.58579 20.25 6 20.25H9.75C10.1642 20.25 10.5 19.9142 10.5 19.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.75 19.5V4.5C18.75 4.08579 18.4142 3.75 18 3.75H14.25C13.8358 3.75 13.5 4.08579 13.5 4.5V19.5C13.5 19.9142 13.8358 20.25 14.25 20.25H18C18.4142 20.25 18.75 19.9142 18.75 19.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Columns);
export default ForwardRef;
