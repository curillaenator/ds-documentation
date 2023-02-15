import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Cards = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M6.00061 4.5H20.2506C20.4495 4.5 20.6403 4.57902 20.7809 4.71967C20.9216 4.86032 21.0006 5.05109 21.0006 5.25V16.5M3.75061 7.5H17.2506C17.6648 7.5 18.0006 7.83579 18.0006 8.25V18.75C18.0006 19.1642 17.6648 19.5 17.2506 19.5H3.75061C3.3364 19.5 3.00061 19.1642 3.00061 18.75V8.25C3.00061 7.83579 3.3364 7.5 3.75061 7.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Cards);
export default ForwardRef;
