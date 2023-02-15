import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const QrCode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M13.5002 13.5V16.5M13.5002 19.5H16.5002V13.5M16.5002 15H19.5002M19.5002 18V19.5M5.25024 4.5H9.75024C10.1645 4.5 10.5002 4.83579 10.5002 5.25V9.75C10.5002 10.1642 10.1645 10.5 9.75024 10.5H5.25024C4.83603 10.5 4.50024 10.1642 4.50024 9.75V5.25C4.50024 4.83579 4.83603 4.5 5.25024 4.5ZM5.25024 13.5H9.75024C10.1645 13.5 10.5002 13.8358 10.5002 14.25V18.75C10.5002 19.1642 10.1645 19.5 9.75024 19.5H5.25024C4.83603 19.5 4.50024 19.1642 4.50024 18.75V14.25C4.50024 13.8358 4.83603 13.5 5.25024 13.5ZM14.2502 4.5H18.7502C19.1644 4.5 19.5002 4.83579 19.5002 5.25V9.75C19.5002 10.1642 19.1644 10.5 18.7502 10.5H14.2502C13.836 10.5 13.5002 10.1642 13.5002 9.75V5.25C13.5002 4.83579 13.836 4.5 14.2502 4.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(QrCode);
export default ForwardRef;
