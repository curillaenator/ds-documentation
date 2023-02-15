import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ScribbleLoop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M2.25 8.7C2.25 8.7 5.25 4.5 9.75 4.5C19.5 4.5 18.75 19.5 9.75 19.5C3.75 19.5 3.75 10.5 12.75 10.5C18.75 10.5 22.5 15 22.5 15'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ScribbleLoop);
export default ForwardRef;
