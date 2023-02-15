import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TextItalic = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M14.2494 5.24939L9.74949 18.7494M5.99952 18.7494H13.4995M10.4995 5.24939H17.9994'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(TextItalic);
export default ForwardRef;
