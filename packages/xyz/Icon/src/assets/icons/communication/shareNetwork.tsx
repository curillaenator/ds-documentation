import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ShareNetwork = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M13.9764 6.87202L8.5229 10.3779M8.5229 13.6226L13.9764 17.1285M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM19.5 18.75C19.5 20.4069 18.1569 21.75 16.5 21.75C14.8431 21.75 13.5 20.4069 13.5 18.75C13.5 17.0931 14.8431 15.75 16.5 15.75C18.1569 15.75 19.5 17.0931 19.5 18.75ZM19.5 5.25C19.5 6.90685 18.1569 8.25 16.5 8.25C14.8431 8.25 13.5 6.90685 13.5 5.25C13.5 3.59315 14.8431 2.25 16.5 2.25C18.1569 2.25 19.5 3.59315 19.5 5.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ShareNetwork);
export default ForwardRef;