import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HighlighterCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.75 13.5V9L14.25 6.75V13.5M15.75 20.1842V14.25C15.75 14.0511 15.671 13.8603 15.5303 13.7197C15.3897 13.579 15.1989 13.5 15 13.5H9C8.80109 13.5 8.61032 13.579 8.46967 13.7197C8.32902 13.8603 8.25 14.0511 8.25 14.25V20.1842M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(HighlighterCircle);
export default ForwardRef;
