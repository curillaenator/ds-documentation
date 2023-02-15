import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Heart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.0012 20.25C12.0012 20.25 2.62619 15 2.62619 8.62501C2.62638 7.49826 3.0168 6.40635 3.73108 5.53493C4.44535 4.66351 5.43939 4.06636 6.54418 3.84501C7.64897 3.62367 8.79633 3.79179 9.79118 4.32079C10.786 4.84979 11.567 5.70701 12.0012 6.74673L12.0012 6.74673C12.4354 5.70702 13.2163 4.84979 14.2112 4.32079C15.206 3.79179 16.3534 3.62367 17.4582 3.84501C18.563 4.06636 19.557 4.66351 20.2713 5.53493C20.9856 6.40635 21.376 7.49826 21.3762 8.62501C21.3762 15 12.0012 20.25 12.0012 20.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Heart);
export default ForwardRef;
