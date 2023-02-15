import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChatTeardropSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.375 2.24884C9.88946 2.25164 7.50652 3.24027 5.74897 4.99781C3.99142 6.75536 3.0028 9.1383 3 11.6238V19.5301C3.00045 19.9195 3.15534 20.2928 3.43069 20.5682C3.70605 20.8435 4.07938 20.9984 4.46878 20.9988H12.375C14.8614 20.9988 17.246 20.0111 19.0041 18.253C20.7623 16.4948 21.75 14.1102 21.75 11.6238C21.75 9.13744 20.7623 6.75287 19.0041 4.99471C17.246 3.23656 14.8614 2.24884 12.375 2.24884Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ChatTeardropSolid);
export default ForwardRef;
