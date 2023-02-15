import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberTwo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.85363 5.74841C8.09798 5.17029 8.46055 4.64966 8.91804 4.21997C9.37553 3.79029 9.91784 3.46104 10.5101 3.25337C11.1024 3.04571 11.7316 2.96422 12.3572 3.01414C12.9829 3.06406 13.5912 3.24428 14.1431 3.54324C14.6949 3.8422 15.1782 4.25328 15.5617 4.75007C15.9453 5.24687 16.2207 5.8184 16.3703 6.42795C16.5199 7.03751 16.5403 7.67161 16.4303 8.28953C16.3203 8.90746 16.0823 9.49554 15.7315 10.016V10.016L7.5 21V20.9989H16.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberTwo);
export default ForwardRef;
