import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ListBullets = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.25 6H20.25M8.25051 12H20.2499M8.25051 18H20.2499M4.2 12H4.2012M4.2 6H4.2012M4.2 18H4.2012'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ListBullets);
export default ForwardRef;
