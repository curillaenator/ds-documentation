import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Asterisk = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 3.75V20.25M4.85548 7.875L19.1449 16.125M4.85548 16.125L19.1449 7.875'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Asterisk);
export default ForwardRef;
