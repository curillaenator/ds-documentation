import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Ghost = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M14.64 10.8H14.6412M9.35977 10.8H9.36097M20.25 20.25L17.5 18L14.75 20.25L12 18L9.25 20.25L6.5 18L3.75 20.25V11.25C3.75 9.06196 4.61919 6.96354 6.16637 5.41637C7.71354 3.86919 9.81196 3 12 3C14.188 3 16.2865 3.86919 17.8336 5.41637C19.3808 6.96354 20.25 9.06196 20.25 11.25V20.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Ghost);
export default ForwardRef;
