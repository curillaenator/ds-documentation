import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Flashlight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.0002 11.25V14.25M6.00024 6H18.0002M6.75024 2.25H17.2502C17.4491 2.25 17.6399 2.32902 17.7805 2.46967C17.9212 2.61032 18.0002 2.80109 18.0002 3V7.25C18.0002 7.41228 17.9475 7.57018 17.8502 7.7L15.9002 10.3C15.8028 10.4298 15.7502 10.5877 15.7502 10.75V21C15.7502 21.1989 15.6712 21.3897 15.5305 21.5303C15.3899 21.671 15.1991 21.75 15.0002 21.75H9.00023C8.80131 21.75 8.61055 21.671 8.4699 21.5303C8.32925 21.3897 8.25023 21.1989 8.25023 21V10.75C8.25023 10.5877 8.1976 10.4298 8.10023 10.3L6.15024 7.7C6.05288 7.57018 6.00024 7.41228 6.00024 7.25V3C6.00024 2.80109 6.07926 2.61032 6.21991 2.46967C6.36056 2.32902 6.55133 2.25 6.75024 2.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Flashlight);
export default ForwardRef;
