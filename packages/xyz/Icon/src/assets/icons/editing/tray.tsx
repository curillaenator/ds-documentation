import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Tray = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.74951 15H7.18885C7.28734 15 7.38487 15.0194 7.47586 15.0571C7.56686 15.0948 7.64954 15.15 7.71918 15.2197L9.52984 17.0303C9.59949 17.1 9.68216 17.1552 9.77316 17.1929C9.86415 17.2306 9.96168 17.25 10.0602 17.25H13.9389C14.0373 17.25 14.1349 17.2306 14.2259 17.1929C14.3169 17.1552 14.3995 17.1 14.4692 17.0303L16.2798 15.2197C16.3495 15.15 16.4322 15.0948 16.5232 15.0571C16.6142 15.0194 16.7117 15 16.8102 15H20.2495M4.49999 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H4.49999C4.08577 20.25 3.74999 19.9142 3.74999 19.5V4.5C3.74999 4.08579 4.08577 3.75 4.49999 3.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Tray);
export default ForwardRef;
