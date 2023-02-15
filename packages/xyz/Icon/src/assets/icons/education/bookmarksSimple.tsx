import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BookmarksSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.25052 3H18.0006C18.1995 3 18.3903 3.07902 18.5309 3.21967C18.6716 3.36032 18.7506 3.55109 18.7506 3.75V18M15.7505 21L10.4998 17.25L5.25049 21V6.75C5.25049 6.55109 5.32951 6.36032 5.47016 6.21967C5.61081 6.07902 5.80158 6 6.00049 6H15.0005C15.1994 6 15.3902 6.07902 15.5308 6.21967C15.6715 6.36032 15.7505 6.55109 15.7505 6.75V21Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BookmarksSimple);
export default ForwardRef;
