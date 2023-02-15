import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const VideoCameraSlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.25 13.5L22.5 16.5V7.5L17.25 10.5V13.5ZM17.25 13.5L17.2499 8.625C17.2499 7.82935 16.9338 7.06629 16.3712 6.50368C15.8086 5.94107 15.0455 5.625 14.2499 5.625H10.3951M3.27268 2.25L21 21.75M17.25 17.625C17.25 17.8239 17.171 18.0147 17.0303 18.1553C16.8897 18.296 16.6989 18.375 16.5 18.375H4.5C3.70435 18.375 2.94129 18.0589 2.37868 17.4963C1.81607 16.9337 1.5 16.1707 1.5 15.375V6.375C1.5 6.17609 1.57902 5.98532 1.71967 5.84467C1.86032 5.70402 2.05109 5.625 2.25 5.625H6.34091'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(VideoCameraSlash);
export default ForwardRef;
