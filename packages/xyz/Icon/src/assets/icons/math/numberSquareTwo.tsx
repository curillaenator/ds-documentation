import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberSquareTwo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.92681 8.8742C10.049 8.58514 10.2303 8.32483 10.459 8.10998C10.6878 7.89513 10.9589 7.73051 11.2551 7.62667C11.5512 7.52284 11.8658 7.4821 12.1786 7.50706C12.4914 7.53202 12.7956 7.62213 13.0715 7.77161C13.3475 7.92109 13.5891 8.12663 13.7809 8.37503C13.9726 8.62343 14.1104 8.9092 14.1852 9.21398C14.2599 9.51876 14.2702 9.83581 14.2152 10.1448C14.1601 10.4537 14.0411 10.7478 13.8657 11.008L9.75 16.5001L14.25 16.4995M4.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H4.5C4.08579 20.25 3.75 19.9142 3.75 19.5V4.5C3.75 4.08579 4.08579 3.75 4.5 3.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberSquareTwo);
export default ForwardRef;
