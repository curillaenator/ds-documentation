import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const AlignBottom = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.2503 20.2507H3.75034M13.5 16.5V7.5C13.5 7.08579 13.8358 6.75 14.25 6.75H18C18.4142 6.75 18.75 7.08579 18.75 7.5V16.5C18.75 16.9142 18.4142 17.25 18 17.25H14.25C13.8358 17.25 13.5 16.9142 13.5 16.5ZM6.00001 3H9.75001C10.1642 3 10.5 3.33579 10.5 3.75V16.5C10.5 16.9142 10.1642 17.25 9.75001 17.25H6.00001C5.58579 17.25 5.25001 16.9142 5.25001 16.5V3.75C5.25001 3.33579 5.58579 3 6.00001 3Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(AlignBottom);
export default ForwardRef;
