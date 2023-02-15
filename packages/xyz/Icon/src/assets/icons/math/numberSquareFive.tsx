import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberSquareFive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M14.25 7.5H10.4845L9.75 12.019C10.1171 11.6519 10.5848 11.4019 11.094 11.3006C11.6032 11.1993 12.131 11.2513 12.6106 11.4499C13.0903 11.6486 13.5002 11.9851 13.7887 12.4167C14.0771 12.8484 14.2311 13.3559 14.2311 13.8751C14.2311 14.3942 14.0771 14.9017 13.7887 15.3334C13.5002 15.7651 13.0903 16.1015 12.6106 16.3002C12.131 16.4989 11.6032 16.5509 11.094 16.4496C10.5848 16.3483 10.1171 16.0983 9.75 15.7312M4.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H4.5C4.08579 20.25 3.75 19.9142 3.75 19.5V4.5C3.75 4.08579 4.08579 3.75 4.5 3.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberSquareFive);
export default ForwardRef;