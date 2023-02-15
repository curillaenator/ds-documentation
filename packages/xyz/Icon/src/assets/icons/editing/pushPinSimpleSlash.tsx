import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PushPinSimpleSlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.55447 3.75H18.0001M12 16.5V22.5M4.5 3.75L19.5 20.25M16.5 3.75L18.4139 14.5955M16.0909 16.5H3.75M5.25 16.4997L7.01232 6.51335'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(PushPinSimpleSlash);
export default ForwardRef;
