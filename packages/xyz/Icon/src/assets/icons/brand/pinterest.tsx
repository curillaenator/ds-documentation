import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Pinterest = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.25 8.25L8.24999 21M5.76996 14.6769C5.11752 13.7037 4.70216 12.5912 4.55717 11.4285C4.41217 10.2658 4.54158 9.08539 4.93501 7.98177C5.32845 6.87814 5.97497 5.88203 6.82275 5.0733C7.67053 4.26456 8.69599 3.66569 9.81693 3.32469C10.9379 2.98368 12.1231 2.91004 13.2776 3.10965C14.4322 3.30926 15.5239 3.77658 16.4653 4.47415C17.4066 5.17171 18.1715 6.08012 18.6985 7.12655C19.2256 8.17299 19.5001 9.32834 19.5002 10.5C19.5002 14.6421 16.5002 17.25 13.5002 17.25C10.5002 17.25 9.59721 15.275 9.59721 15.275'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Pinterest);
export default ForwardRef;
