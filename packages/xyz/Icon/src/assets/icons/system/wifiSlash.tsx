import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const WifiSlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M4.49884 3.75L19.4988 20.25M10.0425 5.38797C10.6904 5.29615 11.3439 5.25017 11.9983 5.25036C15.6108 5.24244 19.0797 6.66387 21.6479 9.20438M2.34854 9.20412C3.62206 7.94426 5.13067 6.94687 6.78869 6.26858M14.2603 10.0276C15.8482 10.4245 17.3011 11.239 18.4683 12.3865M5.52819 12.3857C6.79212 11.1432 8.3888 10.2932 10.1253 9.93845M8.71012 15.5685C9.55558 14.7614 10.6682 14.2933 11.8364 14.2532C13.0045 14.2132 14.1466 14.604 15.0454 15.3512M12 18.72H12.0012'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(WifiSlash);
export default ForwardRef;
