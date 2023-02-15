import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MedalSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.9994 14.25C14.8989 14.25 17.2494 11.8995 17.2494 9C17.2494 6.1005 14.8989 3.75 11.9994 3.75C9.09994 3.75 6.74944 6.1005 6.74944 9C6.74944 11.8995 9.09994 14.25 11.9994 14.25Z'
      fill='currentColor'
    />
    <path
      d='M11.9996 0.750001C10.3009 0.749349 8.64338 1.27331 7.25367 2.25027C5.86396 3.22723 4.80985 4.60952 4.23542 6.2082C3.661 7.80689 3.59429 9.54396 4.0444 11.182C4.49452 12.82 5.4395 14.2791 6.75018 15.3598V22.5C6.75017 22.6279 6.78284 22.7536 6.8451 22.8653C6.90735 22.9769 6.99712 23.0708 7.10588 23.138C7.21464 23.2053 7.33877 23.2435 7.4665 23.2493C7.59422 23.255 7.72129 23.228 7.83563 23.1708L11.9995 21.0885L16.1648 23.1709C16.2792 23.228 16.4062 23.255 16.5339 23.2492C16.6616 23.2435 16.7858 23.2052 16.8945 23.138C17.0033 23.0708 17.093 22.9769 17.1553 22.8652C17.2175 22.7536 17.2502 22.6278 17.2502 22.5V15.3588C18.5606 14.278 19.5053 12.8189 19.9552 11.181C20.405 9.54298 20.3381 7.80605 19.7636 6.20753C19.1891 4.60901 18.135 3.22689 16.7453 2.25006C15.3557 1.27323 13.6983 0.749347 11.9996 0.750001ZM11.9996 15.75C10.6646 15.75 9.35957 15.3541 8.24953 14.6124C7.1395 13.8707 6.27434 12.8165 5.76345 11.5831C5.25256 10.3497 5.11888 8.99251 5.37933 7.68314C5.63978 6.37377 6.28266 5.17103 7.22666 4.22703C8.17067 3.28303 9.3734 2.64015 10.6828 2.3797C11.9921 2.11925 13.3493 2.25292 14.5827 2.76381C15.8161 3.27471 16.8704 4.13987 17.6121 5.2499C18.3538 6.35993 18.7496 7.66498 18.7496 9C18.7476 10.7896 18.0358 12.5053 16.7704 13.7707C15.5049 15.0362 13.7892 15.748 11.9996 15.75Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(MedalSolid);
export default ForwardRef;
