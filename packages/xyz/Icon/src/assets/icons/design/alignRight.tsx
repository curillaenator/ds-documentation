import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const AlignRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.2504 3.74938V20.2494M16.5 10.5H7.5C7.08579 10.5 6.75 10.1642 6.75 9.75V6C6.75 5.58579 7.08579 5.25 7.5 5.25H16.5C16.9142 5.25 17.25 5.58579 17.25 6V9.75C17.25 10.1642 16.9142 10.5 16.5 10.5ZM3.75 13.5H16.5C16.9142 13.5 17.25 13.8358 17.25 14.25V18C17.25 18.4142 16.9142 18.75 16.5 18.75H3.75C3.33579 18.75 3 18.4142 3 18V14.25C3 13.8358 3.33579 13.5 3.75 13.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(AlignRight);
export default ForwardRef;
