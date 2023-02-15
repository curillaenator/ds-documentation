import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberFive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 3H8.96902L7.5 12.0379C8.23421 11.3037 9.16965 10.8037 10.188 10.6011C11.2064 10.3986 12.262 10.5025 13.2213 10.8999C14.1806 11.2972 15.0005 11.9701 15.5774 12.8335C16.1542 13.6968 16.4621 14.7118 16.4621 15.7501C16.4621 16.7885 16.1542 17.8035 15.5774 18.6668C15.0005 19.5302 14.1806 20.2031 13.2213 20.6004C12.262 20.9978 11.2064 21.1017 10.188 20.8991C9.16965 20.6966 8.23421 20.1966 7.5 19.4624'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberFive);
export default ForwardRef;
