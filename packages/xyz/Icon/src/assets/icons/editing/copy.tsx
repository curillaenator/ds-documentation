import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Copy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.75 15.7493H20.25V3.74927H8.25002V8.24927M3.74988 8.24934H15.7499V20.2493H3.74988V8.24934Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Copy);
export default ForwardRef;
