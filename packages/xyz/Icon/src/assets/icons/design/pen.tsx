import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Pen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.75 5.99998L18 11.25L18.75 14.25L15 18M3.79783 15.0479L8.95251 20.2026M8.68934 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V15.3106C3.75 15.2121 3.7694 15.1146 3.80709 15.0236C3.84478 14.9326 3.90003 14.85 3.96967 14.7803L15.2197 3.53031C15.3603 3.38966 15.5511 3.31064 15.75 3.31064C15.9489 3.31064 16.1397 3.38966 16.2803 3.53031L20.4697 7.71965C20.6103 7.8603 20.6893 8.05107 20.6893 8.24998C20.6893 8.44889 20.6103 8.63966 20.4697 8.78031L9.21967 20.0303C9.15003 20.1 9.06735 20.1552 8.97635 20.1929C8.88536 20.2306 8.78783 20.25 8.68934 20.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Pen);
export default ForwardRef;
