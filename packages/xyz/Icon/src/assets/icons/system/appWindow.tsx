import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const AppWindow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M6.48047 7.80004H6.48167M10.0805 7.80004H10.0817M3.75 4.50073H20.25C20.6642 4.50073 21 4.83652 21 5.25073V18.7507C21 19.165 20.6642 19.5007 20.25 19.5007H3.75C3.33579 19.5007 3 19.165 3 18.7507V5.25073C3 4.83652 3.33579 4.50073 3.75 4.50073Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(AppWindow);
export default ForwardRef;
