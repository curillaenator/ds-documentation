import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Newspaper = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9 10.5H16.5M9 13.5H16.5M3 18.75C3.39782 18.75 3.77936 18.592 4.06066 18.3107C4.34196 18.0294 4.5 17.6478 4.5 17.25V6C4.5 5.80109 4.57902 5.61032 4.71967 5.46967C4.86032 5.32902 5.05109 5.25 5.25 5.25H20.25C20.4489 5.25 20.6397 5.32902 20.7803 5.46967C20.921 5.61032 21 5.80109 21 6V17.25C21 17.6478 20.842 18.0294 20.5607 18.3107C20.2794 18.592 19.8978 18.75 19.5 18.75H3ZM3 18.75C2.60218 18.75 2.22064 18.592 1.93934 18.3107C1.65804 18.0294 1.5 17.6478 1.5 17.25V8.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Newspaper);
export default ForwardRef;
