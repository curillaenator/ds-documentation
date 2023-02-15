import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DropHalf = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5 13.5C19.5 6.75 12 1.5 12 1.5M19.5 13.5C19.5 15.4891 18.7098 17.3968 17.3033 18.8033C15.8968 20.2098 13.9891 21 12 21M19.5 13.5L12 6M12 1.5C12 1.5 4.5 6.75 4.5 13.5C4.5 15.4891 5.29018 17.3968 6.6967 18.8033C8.10322 20.2098 10.0109 21 12 21M12 1.5L12 6M12 21L12 15M12 15V10.5M12 15L16.5003 19.5003M12 10.5V6M12 10.5L18.5878 17.0878'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(DropHalf);
export default ForwardRef;
