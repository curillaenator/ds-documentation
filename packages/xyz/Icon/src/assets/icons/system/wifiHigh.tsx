import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const WifiHigh = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.71124 15.5685C9.5969 14.7225 10.7745 14.2505 11.9993 14.2505C13.224 14.2505 14.4017 14.7225 15.2873 15.5685M5.52934 12.3865C7.259 10.6966 9.5812 9.75049 11.9994 9.75049C14.4175 9.75049 16.7397 10.6966 18.4694 12.3865M2.34964 9.20455C4.92227 6.67074 8.38828 5.25049 11.9992 5.25049C15.6101 5.25049 19.0761 6.67074 21.6487 9.20455M12 18.7196H12.0012'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(WifiHigh);
export default ForwardRef;
