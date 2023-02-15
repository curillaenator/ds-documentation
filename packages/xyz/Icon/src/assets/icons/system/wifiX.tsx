import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const WifiX = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.71129 15.5685C9.59694 14.7225 10.7746 14.2504 11.9993 14.2504C13.2241 14.2504 14.4017 14.7225 15.2874 15.5685M21 5.25L16.5 9.75M21 9.75L16.5 5.25M2.34967 9.20438C4.91783 6.66387 8.38672 5.24244 11.9991 5.25036C12.5007 5.25027 13.0019 5.27723 13.5006 5.33114M5.52935 12.3864C7.25542 10.691 9.57995 9.7439 11.9994 9.75033C12.5027 9.75013 13.0053 9.79053 13.5022 9.87113M12 18.72H12.0012'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(WifiX);
export default ForwardRef;
