import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SignIn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.8136 15.9375L12.75 12L8.8136 8.0625M2.25 12H12.7472M12.75 3.75H18C18.1989 3.75 18.3897 3.82902 18.5303 3.96967C18.671 4.11032 18.75 4.30109 18.75 4.5V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H12.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SignIn);
export default ForwardRef;