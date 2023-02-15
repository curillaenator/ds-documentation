import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TextUnderline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.75 20.25H20.25M6 5.25V11.25C6 12.8413 6.63214 14.3674 7.75736 15.4926C8.88258 16.6179 10.4087 17.25 12 17.25C13.5913 17.25 15.1174 16.6179 16.2426 15.4926C17.3679 14.3674 18 12.8413 18 11.25V5.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(TextUnderline);
export default ForwardRef;
