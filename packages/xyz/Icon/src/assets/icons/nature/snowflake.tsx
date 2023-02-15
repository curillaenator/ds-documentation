import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Snowflake = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 6V18M12 6L9.74999 3.75M12 6L14.25 3.75M12 18L9.74999 20.25M12 18L14.25 20.25M6.80397 9L17.1963 15M6.80397 9L3.73047 9.82395M6.80397 9L5.98044 5.92672M17.1963 15L18.0196 18.074M17.1963 15L20.2696 14.1768M6.80397 15L17.1963 9M6.80397 15L5.98044 18.074M6.80397 15L3.73047 14.1768M17.1963 9L20.2696 9.82395M17.1963 9L18.0196 5.92672'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Snowflake);
export default ForwardRef;
