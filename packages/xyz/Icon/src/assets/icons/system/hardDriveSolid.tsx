import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HardDriveSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21 6H3C2.60231 6.00045 2.22105 6.15864 1.93984 6.43984C1.65864 6.72105 1.50045 7.10231 1.5 7.5V16.5C1.50045 16.8977 1.65864 17.279 1.93984 17.5602C2.22105 17.8414 2.60231 17.9995 3 18H21C21.3977 17.9995 21.779 17.8414 22.0602 17.5602C22.3414 17.279 22.4995 16.8977 22.5 16.5V7.5C22.4995 7.10231 22.3414 6.72105 22.0602 6.43984C21.779 6.15864 21.3977 6.00045 21 6ZM17.625 13.125C17.4025 13.125 17.185 13.059 17 12.9354C16.815 12.8118 16.6708 12.6361 16.5857 12.4305C16.5005 12.225 16.4783 11.9988 16.5217 11.7805C16.5651 11.5623 16.6722 11.3618 16.8296 11.2045C16.9869 11.0472 17.1873 10.94 17.4056 10.8966C17.6238 10.8532 17.85 10.8755 18.0556 10.9606C18.2611 11.0458 18.4368 11.19 18.5604 11.375C18.6841 11.56 18.75 11.7775 18.75 12C18.75 12.2984 18.6315 12.5845 18.4205 12.7955C18.2096 13.0065 17.9234 13.125 17.625 13.125Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(HardDriveSolid);
export default ForwardRef;