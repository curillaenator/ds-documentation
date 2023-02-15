import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SimCard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M10.5 14.25V18M13.5 14.25V18M18.7502 21H5.24945C5.05054 21 4.85977 20.921 4.71912 20.7803C4.57847 20.6397 4.49945 20.4489 4.49945 20.25V3.75C4.49945 3.55109 4.57847 3.36032 4.71912 3.21967C4.85977 3.07902 5.05054 3 5.24945 3H14.2502L19.5002 8.25V20.25C19.5002 20.3485 19.4808 20.446 19.4431 20.537C19.4054 20.628 19.3502 20.7107 19.2805 20.7803C19.2109 20.85 19.1282 20.9052 19.0372 20.9429C18.9462 20.9806 18.8487 21 18.7502 21ZM7.5 11.25H16.5V18H7.5V11.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SimCard);
export default ForwardRef;
