import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Sketch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M22.5 9.75L17.25 3.75H6.75L1.5 9.75M22.5 9.75L12 21M22.5 9.75H1.5M12 21L1.5 9.75M12 21L16.6023 9.75L12 3.75L7.39775 9.75L12 21Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Sketch);
export default ForwardRef;
