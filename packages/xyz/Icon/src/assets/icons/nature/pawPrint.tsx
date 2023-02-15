import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PawPrint = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.875 12C20.9105 12 21.75 11.1605 21.75 10.125C21.75 9.08947 20.9105 8.25 19.875 8.25C18.8395 8.25 18 9.08947 18 10.125C18 11.1605 18.8395 12 19.875 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4.125 12C5.16053 12 6 11.1605 6 10.125C6 9.08947 5.16053 8.25 4.125 8.25C3.08947 8.25 2.25 9.08947 2.25 10.125C2.25 11.1605 3.08947 12 4.125 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.625 7.5C9.66053 7.5 10.5 6.66053 10.5 5.625C10.5 4.58947 9.66053 3.75 8.625 3.75C7.58947 3.75 6.75 4.58947 6.75 5.625C6.75 6.66053 7.58947 7.5 8.625 7.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.375 7.5C16.4105 7.5 17.25 6.66053 17.25 5.625C17.25 4.58947 16.4105 3.75 15.375 3.75C14.3395 3.75 13.5 4.58947 13.5 5.625C13.5 6.66053 14.3395 7.5 15.375 7.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.1784 14.6113C16.2378 14.0888 15.5414 13.216 15.2409 12.1828C15.0369 11.4811 14.6106 10.8646 14.0262 10.4259C13.4418 9.98718 12.7308 9.75 12.0001 9.75C11.2693 9.75 10.5583 9.98718 9.97393 10.4259C9.38953 10.8646 8.96332 11.4812 8.75935 12.1829C8.45884 13.2161 7.76242 14.0888 6.82173 14.6113C6.14412 14.9786 5.63383 15.5925 5.39664 16.3259C5.15945 17.0593 5.21356 17.8558 5.54774 18.5503C5.88192 19.2449 6.47055 19.7842 7.19161 20.0565C7.91267 20.3288 8.71087 20.3132 9.42073 20.0129C11.0735 19.3352 12.9266 19.3352 14.5794 20.0129C15.2894 20.3135 16.0877 20.3294 16.809 20.0571C17.5303 19.7849 18.1191 19.2455 18.4534 18.5508C18.7876 17.8561 18.8417 17.0594 18.6043 16.3259C18.3669 15.5924 17.8563 14.9784 17.1784 14.6113Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(PawPrint);
export default ForwardRef;
