import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberCircleTwo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.92681 8.8742C10.049 8.58514 10.2303 8.32483 10.459 8.10998C10.6878 7.89513 10.9589 7.73051 11.2551 7.62667C11.5512 7.52284 11.8658 7.4821 12.1786 7.50706C12.4914 7.53202 12.7956 7.62213 13.0715 7.77161C13.3475 7.92109 13.5891 8.12663 13.7809 8.37503C13.9726 8.62343 14.1104 8.9092 14.1852 9.21398C14.2599 9.51876 14.2702 9.83581 14.2152 10.1448C14.1601 10.4537 14.0411 10.7478 13.8657 11.008L9.75 16.5001L14.25 16.4995M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberCircleTwo);
export default ForwardRef;
