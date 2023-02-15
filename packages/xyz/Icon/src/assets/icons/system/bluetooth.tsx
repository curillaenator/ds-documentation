import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Bluetooth = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.25 12.0002L17.25 7.50024L11.25 3.00024V12.0002ZM11.25 12.0002L17.25 16.5002L11.25 21.0002V12.0002ZM11.25 12.0002L5.25 7.50023M11.25 12.0002L5.25 16.5002'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Bluetooth);
export default ForwardRef;
