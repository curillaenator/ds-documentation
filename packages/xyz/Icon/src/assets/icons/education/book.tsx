import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Book = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M4.5 20.25C4.5 19.6533 4.73705 19.081 5.15901 18.659C5.58097 18.2371 6.15326 18 6.75 18H19.5V3H6.75C6.15326 3 5.58097 3.23705 5.15901 3.65901C4.73705 4.08097 4.5 4.65326 4.5 5.25V20.25ZM4.5 20.25V21H18'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Book);
export default ForwardRef;
