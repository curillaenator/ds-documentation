import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CirclesThree = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 10.125C14.0711 10.125 15.75 8.44607 15.75 6.375C15.75 4.30393 14.0711 2.625 12 2.625C9.92893 2.625 8.25 4.30393 8.25 6.375C8.25 8.44607 9.92893 10.125 12 10.125Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.625 19.875C19.6961 19.875 21.375 18.1961 21.375 16.125C21.375 14.0539 19.6961 12.375 17.625 12.375C15.5539 12.375 13.875 14.0539 13.875 16.125C13.875 18.1961 15.5539 19.875 17.625 19.875Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6.375 19.875C8.44607 19.875 10.125 18.1961 10.125 16.125C10.125 14.0539 8.44607 12.375 6.375 12.375C4.30393 12.375 2.625 14.0539 2.625 16.125C2.625 18.1961 4.30393 19.875 6.375 19.875Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CirclesThree);
export default ForwardRef;
