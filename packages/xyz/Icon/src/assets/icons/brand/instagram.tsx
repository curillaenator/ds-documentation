import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Instagram = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.9195 7.2H16.9207M15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12ZM7.875 3.375H16.125C18.6103 3.375 20.625 5.38972 20.625 7.875V16.125C20.625 18.6103 18.6103 20.625 16.125 20.625H7.875C5.38972 20.625 3.375 18.6103 3.375 16.125V7.875C3.375 5.38972 5.38972 3.375 7.875 3.375Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Instagram);
export default ForwardRef;
