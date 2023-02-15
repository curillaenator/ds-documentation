import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Rectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.2506 4.5H3.75058C3.33637 4.5 3.00058 4.83579 3.00058 5.25V18.75C3.00058 19.1642 3.33637 19.5 3.75058 19.5H20.2506C20.6648 19.5 21.0006 19.1642 21.0006 18.75V5.25C21.0006 4.83579 20.6648 4.5 20.2506 4.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Rectangle);
export default ForwardRef;
