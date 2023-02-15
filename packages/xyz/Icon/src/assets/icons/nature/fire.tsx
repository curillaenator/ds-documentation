import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Fire = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.8176 13.875C16.6581 14.8966 16.1782 15.8411 15.4471 16.5722C14.716 17.3033 13.7716 17.7832 12.75 17.9427M6.75337 6.12733C5.30604 8.3092 4.125 10.8015 4.125 13.1251C4.125 15.2137 4.95468 17.2167 6.43153 18.6936C7.90838 20.1704 9.91142 21.0001 12 21.0001C14.0886 21.0001 16.0916 20.1704 17.5685 18.6936C19.0453 17.2167 19.875 15.2137 19.875 13.1251C19.875 8.25008 16.5 4.50008 13.7647 1.76929L10.5 8.62508L6.75337 6.12733Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Fire);
export default ForwardRef;
