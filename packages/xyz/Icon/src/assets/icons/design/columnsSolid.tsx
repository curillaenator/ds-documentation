import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ColumnsSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.25 4.5V19.5C11.2495 19.8977 11.0914 20.279 10.8102 20.5602C10.529 20.8414 10.1477 20.9995 9.75 21H6C5.60231 20.9995 5.22105 20.8414 4.93984 20.5602C4.65864 20.279 4.50045 19.8977 4.5 19.5V4.5C4.50045 4.10231 4.65864 3.72105 4.93984 3.43984C5.22105 3.15864 5.60231 3.00045 6 3H9.75C10.1477 3.00045 10.529 3.15864 10.8102 3.43984C11.0914 3.72105 11.2495 4.10231 11.25 4.5ZM18 3H14.25C13.8523 3.00045 13.471 3.15864 13.1898 3.43984C12.9086 3.72105 12.7505 4.10231 12.75 4.5V19.5C12.7505 19.8977 12.9086 20.279 13.1898 20.5602C13.471 20.8414 13.8523 20.9995 14.25 21H18C18.3977 20.9995 18.779 20.8414 19.0602 20.5602C19.3414 20.279 19.4995 19.8977 19.5 19.5V4.5C19.4995 4.10231 19.3414 3.72105 19.0602 3.43984C18.779 3.15864 18.3977 3.00045 18 3Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ColumnsSolid);
export default ForwardRef;