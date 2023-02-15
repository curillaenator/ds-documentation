import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MagnifyingGlassMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.87488 10.8749H13.8749M16.4429 16.4435L20.9992 20.9999M18.7499 10.8746C18.7499 15.2239 15.2241 18.7496 10.8749 18.7496C6.52564 18.7496 2.99988 15.2239 2.99988 10.8746C2.99988 6.52539 6.52564 2.99963 10.8749 2.99963C15.2241 2.99963 18.7499 6.52539 18.7499 10.8746Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(MagnifyingGlassMinus);
export default ForwardRef;
