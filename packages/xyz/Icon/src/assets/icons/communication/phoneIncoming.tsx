import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PhoneIncoming = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15 5.25002V9.00002M15 9.00002H18.75M15 9.00002L19.5 4.50002M8.66965 11.7009C9.44762 13.2914 10.7369 14.5748 12.3309 15.3456C12.4475 15.4008 12.5765 15.4248 12.7052 15.415C12.8339 15.4053 12.9579 15.3622 13.0648 15.29L15.4119 13.7249C15.5157 13.6557 15.6352 13.6135 15.7594 13.6021C15.8837 13.5907 16.0088 13.6104 16.1235 13.6596L20.5144 15.5414C20.6636 15.6048 20.7881 15.7149 20.8693 15.8552C20.9504 15.9955 20.9838 16.1583 20.9643 16.3192C20.8255 17.4052 20.2956 18.4034 19.4739 19.1269C18.6521 19.8503 17.5948 20.2495 16.5 20.2495C13.1185 20.2495 9.87548 18.9062 7.48439 16.5151C5.0933 14.124 3.75 10.881 3.75 7.49951C3.75006 6.40468 4.14918 5.3474 4.87264 4.52565C5.5961 3.70389 6.59428 3.17402 7.68028 3.03523C7.84117 3.01576 8.00403 3.0491 8.14432 3.13024C8.28461 3.21137 8.39473 3.3359 8.4581 3.48507L10.3416 7.87987C10.3903 7.99354 10.4101 8.1175 10.3994 8.2407C10.3886 8.36391 10.3475 8.48253 10.2798 8.58602L8.72011 10.9691C8.64912 11.0763 8.60716 11.2001 8.59831 11.3284C8.58947 11.4566 8.61405 11.585 8.66965 11.7009Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(PhoneIncoming);
export default ForwardRef;
