import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ArchiveBox = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.75 6.75V19.5C3.75 19.6989 3.82902 19.8897 3.96967 20.0303C4.11032 20.171 4.30109 20.25 4.5 20.25H19.5C19.6989 20.25 19.8897 20.171 20.0303 20.0303C20.171 19.8897 20.25 19.6989 20.25 19.5V6.75M3.75 6.75L5.25 3.75H18.75L20.25 6.75M3.75 6.75H20.25M8.81807 14.0679L12 17.2499M12 17.2499L15.182 14.0679M12 17.2499L12 9.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ArchiveBox);
export default ForwardRef;
