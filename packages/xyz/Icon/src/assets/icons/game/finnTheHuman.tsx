import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FinnTheHuman = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.64144 13.2H8.64023M15.3612 13.2H15.36M8.25 9.75H15.75C17.4069 9.75 18.75 11.0931 18.75 12.75V13.5C18.75 15.1569 17.4069 16.5 15.75 16.5H8.25C6.59315 16.5 5.25 15.1569 5.25 13.5V12.75C5.25 11.0931 6.59315 9.75 8.25 9.75ZM2.25 6C2.25 5.40326 2.48705 4.83097 2.90901 4.40901C3.33097 3.98705 3.90326 3.75 4.5 3.75C5.09674 3.75 5.66903 3.98705 6.09099 4.40901C6.51295 4.83097 6.75 5.40326 6.75 6H17.25C17.25 5.40326 17.4871 4.83097 17.909 4.40901C18.331 3.98705 18.9033 3.75 19.5 3.75C20.0967 3.75 20.669 3.98705 21.091 4.40901C21.5129 4.83097 21.75 5.40326 21.75 6V13.5C21.75 15.0913 21.1179 16.6174 19.9926 17.7426C18.8674 18.8679 17.3413 19.5 15.75 19.5H8.25C6.6587 19.5 5.13258 18.8679 4.00736 17.7426C2.88214 16.6174 2.25 15.0913 2.25 13.5V6Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FinnTheHuman);
export default ForwardRef;
