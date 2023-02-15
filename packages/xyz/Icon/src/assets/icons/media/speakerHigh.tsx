import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SpeakerHigh = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.5213 7.22725C21.1481 7.85404 21.6453 8.59816 21.9845 9.4171C22.3237 10.2361 22.4983 11.1138 22.4983 12.0002C22.4983 12.8866 22.3237 13.7644 21.9845 14.5833C21.6453 15.4023 21.1481 16.1464 20.5213 16.7732M7.5 15.75H3C2.80109 15.75 2.61032 15.671 2.46967 15.5303C2.32902 15.3897 2.25 15.1989 2.25 15V9C2.25 8.80109 2.32902 8.61032 2.46967 8.46967C2.61032 8.32902 2.80109 8.25 3 8.25H7.5M7.5 15.75L14.25 21V3L7.5 8.25M7.5 15.75V8.25M17.8696 9.87869C18.1482 10.1573 18.3692 10.488 18.52 10.8519C18.6707 11.2159 18.7483 11.606 18.7483 12C18.7483 12.3939 18.6707 12.784 18.52 13.148C18.3692 13.512 18.1482 13.8427 17.8696 14.1213'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SpeakerHigh);
export default ForwardRef;
