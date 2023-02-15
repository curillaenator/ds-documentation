import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PushPinSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 16.5V22.5M6 3.75H18M3.75 16.5H20.25M5.25 16.5L7.5 3.75M16.5 3.75L18.75 16.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(PushPinSimple);
export default ForwardRef;
