import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SlidersHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M13.8749 16.1243L3.74994 16.1243M13.8749 16.1243C13.8749 17.1598 14.7145 17.9993 15.75 17.9993C16.7855 17.9993 17.625 17.1598 17.625 16.1243M13.8749 16.1243C13.8749 15.0888 14.7145 14.2493 15.75 14.2493C16.7855 14.2493 17.625 15.0888 17.625 16.1243M20.25 16.1243L17.625 16.1243M7.87494 7.87431L3.74994 7.87422M7.87494 7.87431C7.87494 8.90985 8.7144 9.74936 9.74994 9.74936C10.7855 9.74936 11.6249 8.90985 11.6249 7.87431M7.87494 7.87431C7.87494 6.83876 8.7144 5.99933 9.74994 5.99933C10.7855 5.99933 11.6249 6.83876 11.6249 7.87431M20.2499 7.87422L11.6249 7.87431'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SlidersHorizontal);
export default ForwardRef;
