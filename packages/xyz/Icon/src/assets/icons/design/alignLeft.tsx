import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const AlignLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.74953 3.74938V20.2494M7.50001 5.25H16.5C16.9142 5.25 17.25 5.58579 17.25 6V9.75C17.25 10.1642 16.9142 10.5 16.5 10.5H7.50001C7.08579 10.5 6.75001 10.1642 6.75001 9.75V6C6.75001 5.58579 7.08579 5.25 7.50001 5.25ZM7.50001 13.5H20.25C20.6642 13.5 21 13.8358 21 14.25V18C21 18.4142 20.6642 18.75 20.25 18.75H7.50001C7.08579 18.75 6.75001 18.4142 6.75001 18V14.25C6.75001 13.8358 7.08579 13.5 7.50001 13.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(AlignLeft);
export default ForwardRef;
