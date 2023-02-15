import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CircleDownRightSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.747 9.41506 20.7188 6.93684 18.891 5.10901C17.0632 3.28118 14.5849 2.25299 12 2.25ZM15.375 14.625C15.3743 14.8237 15.2951 15.0141 15.1546 15.1546C15.0141 15.2951 14.8237 15.3743 14.625 15.375H10.125C9.92609 15.375 9.73533 15.296 9.59467 15.1553C9.45402 15.0147 9.375 14.8239 9.375 14.625C9.375 14.4261 9.45402 14.2353 9.59467 14.0947C9.73533 13.954 9.92609 13.875 10.125 13.875H12.8145L8.84473 9.90527C8.70434 9.76458 8.62554 9.57392 8.62565 9.37516C8.62575 9.17641 8.70476 8.98583 8.84529 8.84529C8.98583 8.70475 9.17642 8.62575 9.37517 8.62564C9.57392 8.62554 9.76459 8.70434 9.90528 8.84473L13.875 12.8145V10.125C13.875 9.92609 13.954 9.73532 14.0947 9.59467C14.2353 9.45402 14.4261 9.375 14.625 9.375C14.8239 9.375 15.0147 9.45402 15.1553 9.59467C15.296 9.73532 15.375 9.92609 15.375 10.125V14.625Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CircleDownRightSolid);
export default ForwardRef;