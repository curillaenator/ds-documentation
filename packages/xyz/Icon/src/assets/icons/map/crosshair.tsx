import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Crosshair = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 1.875V5.625M1.875 12H5.625M12 22.125V18.375M22.125 12H18.375M20.25 12C20.25 16.5564 16.5564 20.25 12 20.25C7.44365 20.25 3.75 16.5564 3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5564 3.75 20.25 7.44365 20.25 12ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Crosshair);
export default ForwardRef;
