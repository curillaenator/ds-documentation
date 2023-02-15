import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SmileySad = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.8979 16.5001C15.5026 15.8163 14.9343 15.2485 14.2501 14.8537C13.5659 14.459 12.7899 14.2512 12 14.2512C11.2101 14.2512 10.4341 14.459 9.74993 14.8537C9.06574 15.2484 8.49742 15.8162 8.10205 16.5M15.3598 10.0805H15.361M8.64 10.0805H8.6412M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SmileySad);
export default ForwardRef;
