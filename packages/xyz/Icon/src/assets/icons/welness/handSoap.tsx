import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HandSoap = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.5 9.75H16.5M7.5 9.75C6.70435 9.75 5.94129 10.0661 5.37868 10.6287C4.81607 11.1913 4.5 11.9544 4.5 12.75V20.25C4.5 20.4489 4.57902 20.6397 4.71967 20.7803C4.86032 20.921 5.05109 21 5.25 21H18.75C18.9489 21 19.1397 20.921 19.2803 20.7803C19.421 20.6397 19.5 20.4489 19.5 20.25V12.75C19.5 11.9544 19.1839 11.1913 18.6213 10.6287C18.0587 10.0661 17.2956 9.75 16.5 9.75M7.5 9.75V8.25C7.5 7.65326 7.73705 7.08097 8.15901 6.65901C8.58097 6.23705 9.15326 6 9.75 6H14.25C14.8467 6 15.419 6.23705 15.841 6.65901C16.2629 7.08097 16.5 7.65326 16.5 8.25V9.75M17.25 3.75C17.25 3.35218 17.092 2.97064 16.8107 2.68934C16.5294 2.40804 16.1478 2.25 15.75 2.25H9.75M12 2.25V6'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(HandSoap);
export default ForwardRef;
