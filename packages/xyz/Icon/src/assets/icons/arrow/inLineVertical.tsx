import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const InLineVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.25 12H3.75M12 1.5V9M12 9L15 6M12 9L9 6M12 22.5V15M12 15L9 18M12 15L15 18'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(InLineVertical);
export default ForwardRef;
