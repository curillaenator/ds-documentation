import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BookBookmark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5002 3V12L13.4995 9.75L10.5002 12V3M4.5002 20.25C4.5002 19.6533 4.73725 19.081 5.15921 18.659C5.58116 18.2371 6.15346 18 6.7502 18H19.5002V3H6.7502C6.15346 3 5.58116 3.23705 5.15921 3.65901C4.73725 4.08097 4.5002 4.65326 4.5002 5.25V20.25ZM4.5002 20.25L4.50012 21H18.0001'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BookBookmark);
export default ForwardRef;
