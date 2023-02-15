import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Scissors = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.75 12L7.79128 15.3928M21.7498 5.84216L15.4062 10.1825M21.7512 18.1579L7.79237 8.60713M8.25 7.125C8.25 8.57475 7.07475 9.75 5.625 9.75C4.17525 9.75 3 8.57475 3 7.125C3 5.67525 4.17525 4.5 5.625 4.5C7.07475 4.5 8.25 5.67525 8.25 7.125ZM8.25 16.875C8.25 18.3247 7.07475 19.5 5.625 19.5C4.17525 19.5 3 18.3247 3 16.875C3 15.4253 4.17525 14.25 5.625 14.25C7.07475 14.25 8.25 15.4253 8.25 16.875Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Scissors);
export default ForwardRef;
