import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberNine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5459 10.8744L10.4766 20.9998'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 13.5C14.8995 13.5 17.25 11.1495 17.25 8.25C17.25 5.35051 14.8995 3 12 3C9.10051 3 6.75 5.35051 6.75 8.25C6.75 11.1495 9.10051 13.5 12 13.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberNine);
export default ForwardRef;
