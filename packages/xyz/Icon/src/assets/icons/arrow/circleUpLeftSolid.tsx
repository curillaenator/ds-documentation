import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CircleUpLeftSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.747 9.41506 20.7188 6.93684 18.891 5.10901C17.0632 3.28118 14.5849 2.25299 12 2.25ZM15.1553 15.1553C15.0857 15.2249 15.003 15.2802 14.912 15.3179C14.821 15.3556 14.7235 15.375 14.625 15.375C14.5265 15.375 14.429 15.3556 14.338 15.3179C14.247 15.2802 14.1644 15.2249 14.0947 15.1553L10.125 11.1855V13.875C10.125 14.0739 10.046 14.2647 9.90533 14.4053C9.76468 14.546 9.57392 14.625 9.375 14.625C9.17609 14.625 8.98533 14.546 8.84467 14.4053C8.70402 14.2647 8.625 14.0739 8.625 13.875V9.375C8.62568 9.1763 8.70492 8.98593 8.84543 8.84542C8.98593 8.70492 9.1763 8.62568 9.375 8.625H13.875C14.0739 8.625 14.2647 8.70402 14.4053 8.84467C14.546 8.98532 14.625 9.17609 14.625 9.375C14.625 9.57391 14.546 9.76468 14.4053 9.90533C14.2647 10.046 14.0739 10.125 13.875 10.125H11.1856L15.1553 14.0947C15.2249 14.1644 15.2802 14.247 15.3179 14.338C15.3556 14.429 15.375 14.5265 15.375 14.625C15.375 14.7235 15.3556 14.821 15.3179 14.912C15.2802 15.003 15.2249 15.0856 15.1553 15.1553Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CircleUpLeftSolid);
export default ForwardRef;
