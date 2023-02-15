import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const RssSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M5.25 4.5C9.02934 4.5 12.6539 6.00134 15.3263 8.67373C17.9987 11.3461 19.5 14.9707 19.5 18.75M5.25 11.25C6.23491 11.25 7.21018 11.444 8.12013 11.8209C9.03007 12.1978 9.85686 12.7503 10.5533 13.4467C11.2497 14.1431 11.8022 14.9699 12.1791 15.8799C12.556 16.7898 12.75 17.7651 12.75 18.75M5.28047 18.72H5.28167'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(RssSimple);
export default ForwardRef;
