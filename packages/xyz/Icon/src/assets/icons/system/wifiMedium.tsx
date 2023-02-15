import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const WifiMedium = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.71126 15.5685C9.59691 14.7225 10.7745 14.2505 11.9993 14.2505C13.2241 14.2505 14.4017 14.7225 15.2874 15.5685M5.52936 12.3865C7.25902 10.6966 9.58122 9.75049 11.9994 9.75049C14.4176 9.75049 16.7398 10.6966 18.4694 12.3865M12 18.7196H12.0012'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(WifiMedium);
export default ForwardRef;
