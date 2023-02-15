import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CirclesFourSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.125 11.25C9.40317 11.25 11.25 9.40317 11.25 7.125C11.25 4.84683 9.40317 3 7.125 3C4.84683 3 3 4.84683 3 7.125C3 9.40317 4.84683 11.25 7.125 11.25Z'
      fill='currentColor'
    />
    <path
      d='M16.875 11.25C19.1532 11.25 21 9.40317 21 7.125C21 4.84683 19.1532 3 16.875 3C14.5968 3 12.75 4.84683 12.75 7.125C12.75 9.40317 14.5968 11.25 16.875 11.25Z'
      fill='currentColor'
    />
    <path
      d='M7.125 21C9.40317 21 11.25 19.1532 11.25 16.875C11.25 14.5968 9.40317 12.75 7.125 12.75C4.84683 12.75 3 14.5968 3 16.875C3 19.1532 4.84683 21 7.125 21Z'
      fill='currentColor'
    />
    <path
      d='M16.875 21C19.1532 21 21 19.1532 21 16.875C21 14.5968 19.1532 12.75 16.875 12.75C14.5968 12.75 12.75 14.5968 12.75 16.875C12.75 19.1532 14.5968 21 16.875 21Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CirclesFourSolid);
export default ForwardRef;
