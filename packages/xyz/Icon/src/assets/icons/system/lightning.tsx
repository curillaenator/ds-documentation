import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Lightning = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9 22.499L10.5 14.999L4.5 12.749L15 1.49902L13.5 8.99902L19.5 11.249L9 22.499Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Lightning);
export default ForwardRef;
