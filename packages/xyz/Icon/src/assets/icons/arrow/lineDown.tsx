import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LineDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 2.99951V17.2495M12 17.2495L5.25 10.4995M12 17.2495L18.75 10.4995M3.75 20.2495H20.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(LineDown);
export default ForwardRef;
