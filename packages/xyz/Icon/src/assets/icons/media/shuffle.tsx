import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Shuffle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3 6.75H5.16229C6.11734 6.75 7.05859 6.97798 7.90778 7.41499C8.75698 7.852 9.48959 8.48542 10.0447 9.26257L13.9553 14.7374C14.5104 15.5146 15.243 16.148 16.0922 16.585C16.9414 17.022 17.8827 17.25 18.8377 17.25H21.75M21.75 17.25L19.5 15M21.75 17.25L19.5 19.5M19.5 4.5L21.75 6.75M21.75 6.75L19.5 9M21.75 6.75H18.8377C17.8826 6.75 16.9414 6.97798 16.0922 7.41499C15.243 7.85201 14.5104 8.48542 13.9553 9.26257L13.8434 9.41926M3 17.2505H5.16229C6.11734 17.2505 7.05859 17.0225 7.90779 16.5855C8.75698 16.1485 9.48959 15.515 10.0447 14.7379L10.1566 14.5812'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Shuffle);
export default ForwardRef;
