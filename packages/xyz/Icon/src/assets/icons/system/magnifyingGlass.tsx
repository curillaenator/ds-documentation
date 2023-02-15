import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MagnifyingGlass = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.4429 16.444L20.9992 21.0003M18.7499 10.875C18.7499 15.2242 15.2241 18.75 10.8749 18.75C6.52564 18.75 2.99988 15.2242 2.99988 10.875C2.99988 6.52576 6.52564 3 10.8749 3C15.2241 3 18.7499 6.52576 18.7499 10.875Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(MagnifyingGlass);
export default ForwardRef;
