import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Browsers = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M6.00055 7.5V5.25C6.00055 5.05109 6.07957 4.86032 6.22022 4.71967C6.36087 4.57902 6.55164 4.5 6.75055 4.5H20.2506C20.4495 4.5 20.6402 4.57902 20.7809 4.71967C20.9215 4.86032 21.0006 5.05109 21.0006 5.25V15.75C21.0006 15.9489 20.9215 16.1397 20.7809 16.2803C20.6402 16.421 20.4495 16.5 20.2506 16.5H18.0006M3 10.5H18M3.75055 7.5H17.2506C17.6648 7.5 18.0006 7.83579 18.0006 8.25V18.75C18.0006 19.1642 17.6648 19.5 17.2506 19.5H3.75055C3.33634 19.5 3.00055 19.1642 3.00055 18.75V8.25C3.00055 7.83579 3.33634 7.5 3.75055 7.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Browsers);
export default ForwardRef;
