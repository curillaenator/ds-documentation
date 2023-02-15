import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Thickness = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.2 11.2H4.8V10.8H19.2V11.2ZM19.2 18.2H4.8V16.8H19.2V18.2Z'
      stroke='currentColor'
      strokeWidth='inherit'
    />
  </svg>
);

const ForwardRef = forwardRef(Thickness);
export default ForwardRef;
