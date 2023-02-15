import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LineUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 21.0004V6.75044M12 6.75044L5.25 13.5004M12 6.75044L18.75 13.5004M3.75 3.75H20.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(LineUp);
export default ForwardRef;
