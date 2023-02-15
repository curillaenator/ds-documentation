import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Calendar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 2.25V5.25M7.5 2.25V5.25M3.75 8.25H20.25M8.625 11.9996H11.25L9.75 13.8746C9.99664 13.8746 10.2395 13.9354 10.457 14.0517C10.6745 14.1679 10.86 14.336 10.9971 14.5411C11.1341 14.7461 11.2185 14.9818 11.2427 15.2272C11.267 15.4727 11.2303 15.7203 11.136 15.9482C11.0417 16.1761 10.8926 16.3772 10.702 16.5337C10.5114 16.6903 10.2852 16.7974 10.0433 16.8456C9.80143 16.8938 9.55139 16.8817 9.31534 16.8102C9.07928 16.7387 8.86449 16.6102 8.68999 16.4359M13.5 13.1247L15 11.9997V16.8747M4.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H4.5C4.08579 20.25 3.75 19.9142 3.75 19.5V4.5C3.75 4.08579 4.08579 3.75 4.5 3.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Calendar);
export default ForwardRef;
