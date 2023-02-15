import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BluetoothConnected = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.25 12L17.25 7.5L11.25 3V12ZM11.25 12L17.25 16.5L11.25 21V12ZM11.25 12L5.24999 7.5M11.25 12L5.24999 16.5M4.79999 12H4.80119M18.48 12H18.4812'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BluetoothConnected);
export default ForwardRef;
