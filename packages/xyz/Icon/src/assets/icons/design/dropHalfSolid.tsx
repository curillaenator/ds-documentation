import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DropHalfSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5 13.5C19.5 6.75 12 1.5 12 1.5C12 1.5 4.5 6.75 4.5 13.5C4.5 15.4891 5.29018 17.3968 6.6967 18.8033C8.10322 20.2098 10.0109 21 12 21C13.9891 21 15.8968 20.2098 17.3033 18.8033C18.7098 17.3968 19.5 15.4891 19.5 13.5Z'
      fill='currentColor'
    />
    <path
      d='M12 21C12.9849 21 13.9602 20.806 14.8701 20.4291C15.7801 20.0522 16.6069 19.4997 17.3033 18.8033C17.9997 18.1069 18.5522 17.2801 18.9291 16.3701C19.306 15.4602 19.5 14.4849 19.5 13.5C19.5 6.75 12 1.5 12 1.5V21Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(DropHalfSolid);
export default ForwardRef;
