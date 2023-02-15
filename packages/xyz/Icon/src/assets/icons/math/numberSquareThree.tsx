import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberSquareThree = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.75 7.875H14.2494L11.6253 11.6254C12.057 11.6254 12.482 11.7319 12.8627 11.9353C13.2434 12.1388 13.568 12.433 13.8078 12.7919C14.0477 13.1508 14.1953 13.5633 14.2376 13.9929C14.2799 14.4225 14.2156 14.8558 14.0504 15.2546C13.8853 15.6534 13.6243 16.0053 13.2906 16.2792C12.9569 16.553 12.5609 16.7403 12.1375 16.8246C11.7142 16.9088 11.2766 16.8873 10.8635 16.762C10.4504 16.6367 10.0747 16.4114 9.76943 16.1062M4.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H4.5C4.08579 20.25 3.75 19.9142 3.75 19.5V4.5C3.75 4.08579 4.08579 3.75 4.5 3.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberSquareThree);
export default ForwardRef;
