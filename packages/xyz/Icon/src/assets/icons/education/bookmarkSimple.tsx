import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BookmarkSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.9988 21L11.9981 17.25L5.99884 21V4.5C5.99884 4.30109 6.07786 4.11032 6.21851 3.96967C6.35916 3.82902 6.54993 3.75 6.74884 3.75H17.2488C17.4478 3.75 17.6385 3.82902 17.7792 3.96967C17.9198 4.11032 17.9988 4.30109 17.9988 4.5V21Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BookmarkSimple);
export default ForwardRef;
