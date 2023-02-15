import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Image = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3 15.75L7.71966 11.0304C7.7893 10.9607 7.87198 10.9055 7.96297 10.8678C8.05397 10.8301 8.15149 10.8107 8.24999 10.8107C8.34848 10.8107 8.446 10.8301 8.537 10.8678C8.62799 10.9055 8.71067 10.9607 8.78032 11.0304L12.9697 15.2197C13.0393 15.2893 13.122 15.3446 13.213 15.3823C13.304 15.42 13.4015 15.4394 13.5 15.4394C13.5985 15.4394 13.696 15.42 13.787 15.3823C13.878 15.3446 13.9607 15.2893 14.0303 15.2197L15.9697 13.2804C16.0393 13.2107 16.122 13.1555 16.213 13.1178C16.304 13.0801 16.4015 13.0607 16.5 13.0607C16.5985 13.0607 16.696 13.0801 16.787 13.1178C16.878 13.1555 16.9607 13.2107 17.0303 13.2804L21 17.25M14.6402 9.36H14.6414M3.75 4.5H20.25C20.6642 4.5 21 4.83579 21 5.25V18.75C21 19.1642 20.6642 19.5 20.25 19.5H3.75C3.33579 19.5 3 19.1642 3 18.75V5.25C3 4.83579 3.33579 4.5 3.75 4.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Image);
export default ForwardRef;
