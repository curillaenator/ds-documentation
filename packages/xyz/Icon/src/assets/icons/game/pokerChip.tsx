import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PokerChip = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H17.25M12 21C7.02944 21 3 16.9706 3 12M12 21V17.25M3 12C3 7.02944 7.02944 3 12 3M3 12H6.75M12 3V6.75M17.25 12C17.25 14.8995 14.8995 17.25 12 17.25M17.25 12C17.25 9.10051 14.8995 6.75 12 6.75M12 17.25C9.10051 17.25 6.75 14.8995 6.75 12M6.75 12C6.75 9.10051 9.10051 6.75 12 6.75M8.28786 8.28756L5.63621 5.63591M8.28786 15.7121L5.63621 18.3637M15.7122 15.7121L18.3639 18.3637M15.7122 8.28756L18.3639 5.63591'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(PokerChip);
export default ForwardRef;
