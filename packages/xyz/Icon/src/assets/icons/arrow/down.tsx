import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Down = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 3.75V20.25M12 20.25L5.25 13.5M12 20.25L18.75 13.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Down);
export default ForwardRef;
