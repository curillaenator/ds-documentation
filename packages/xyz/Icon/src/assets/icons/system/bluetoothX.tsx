import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BluetoothX = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.25 12.0002L17.25 16.5002L11.25 21.0002V12.0002ZM11.25 12.0002L5.25 7.50023M11.25 12.0002L5.25 16.5002M11.25 12.0002L14.25 9.75015M11.25 12.0002V3.00024L14.2499 5.25015M21.75 5.24993L17.25 9.74993M21.75 9.74993L17.25 5.24993'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BluetoothX);
export default ForwardRef;
