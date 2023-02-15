import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberCircleFive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M14.25 7.875H10.4845L9.75 12.394C10.1171 12.0269 10.5848 11.7769 11.094 11.6756C11.6032 11.5743 12.131 11.6263 12.6106 11.8249C13.0903 12.0236 13.5002 12.3601 13.7887 12.7917C14.0771 13.2234 14.2311 13.7309 14.2311 14.2501C14.2311 14.7692 14.0771 15.2767 13.7887 15.7084C13.5002 16.1401 13.0903 16.4765 12.6106 16.6752C12.131 16.8739 11.6032 16.9259 11.094 16.8246C10.5848 16.7233 10.1171 16.4733 9.75 16.1062M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberCircleFive);
export default ForwardRef;
