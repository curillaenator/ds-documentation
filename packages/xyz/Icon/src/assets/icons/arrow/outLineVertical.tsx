import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const OutLineVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.25 12H3.75M12 9V1.5M12 1.5L9 4.5M12 1.5L15 4.5M12 15V22.5M12 22.5L15 19.5M12 22.5L9 19.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(OutLineVertical);
export default ForwardRef;
