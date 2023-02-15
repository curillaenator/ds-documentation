import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Timer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 12.0504L15.7123 8.33806M9.75 0.800049H14.25M20.25 12.05C20.25 16.6064 16.5564 20.3 12 20.3C7.44365 20.3 3.75 16.6064 3.75 12.05C3.75 7.4937 7.44365 3.80005 12 3.80005C16.5564 3.80005 20.25 7.4937 20.25 12.05Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Timer);
export default ForwardRef;
