import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Cardholder = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3 11.25H8.32592C8.4987 11.25 8.66618 11.3097 8.79997 11.419C8.93376 11.5284 9.02563 11.6806 9.06 11.8499C9.19843 12.5275 9.56665 13.1365 10.1024 13.5738C10.6381 14.0111 11.3084 14.25 12 14.25C12.6916 14.25 13.3619 14.0111 13.8976 13.5738C14.4334 13.1365 14.8016 12.5275 14.94 11.8499C14.9744 11.6806 15.0662 11.5284 15.2 11.419C15.3338 11.3097 15.5013 11.25 15.6741 11.25H21M3 8.25H21M4.5 5.25H19.5C20.3284 5.25 21 5.92157 21 6.75V17.25C21 18.0784 20.3284 18.75 19.5 18.75H4.5C3.67157 18.75 3 18.0784 3 17.25V6.75C3 5.92157 3.67157 5.25 4.5 5.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Cardholder);
export default ForwardRef;
