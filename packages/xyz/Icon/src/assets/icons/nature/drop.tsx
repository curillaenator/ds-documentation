import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Drop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.7613 17.9265C13.6786 17.7706 14.5249 17.3336 15.1833 16.6761C15.8417 16.0185 16.2797 15.1727 16.4367 14.2556M19.5 13.5C19.5 6.75 12 1.5 12 1.5C12 1.5 4.5 6.75 4.5 13.5C4.5 15.4891 5.29018 17.3968 6.6967 18.8033C8.10322 20.2098 10.0109 21 12 21C13.9891 21 15.8968 20.2098 17.3033 18.8033C18.7098 17.3968 19.5 15.4891 19.5 13.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Drop);
export default ForwardRef;
