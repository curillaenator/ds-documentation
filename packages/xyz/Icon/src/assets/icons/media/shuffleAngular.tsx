import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ShuffleAngular = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3 6.75H7.86404C7.98342 6.75 8.10107 6.7785 8.20722 6.83312C8.31337 6.88775 8.40495 6.96693 8.47434 7.06407L15.5257 16.9359C15.5951 17.0331 15.6866 17.1123 15.7928 17.1669C15.8989 17.2215 16.0166 17.25 16.136 17.25H21.75M21.75 17.25L19.5 15M21.75 17.25L19.5 19.5M19.5 4.5L21.75 6.75M21.75 6.75L19.5 9M21.75 6.75H16.136C16.0166 6.75 15.8989 6.7785 15.7928 6.83312C15.6866 6.88775 15.5951 6.96693 15.5257 7.06407L13.8434 9.41931M3 17.2504H7.86404C7.98342 17.2504 8.10107 17.2219 8.20722 17.1672C8.31337 17.1126 8.40495 17.0334 8.47434 16.9363L10.1566 14.5811'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ShuffleAngular);
export default ForwardRef;
