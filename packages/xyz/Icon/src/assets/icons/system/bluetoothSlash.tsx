import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BluetoothSlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M5.24956 16.5002L11.2496 12.0002M11.2496 12.0002L11.2496 21.0002L16.5609 17.0167M11.2496 12.0002L13.6092 13.7698M4.5 3.74993L19.5 20.2499M11.2496 6.71452V3.00024L17.2496 7.50024L14.1067 9.8574'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BluetoothSlash);
export default ForwardRef;
