import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TrafficSign = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M13.5 13.5L15.75 11.25M15.75 11.25L13.5 8.99996M15.75 11.25H10.5C9.90327 11.25 9.33098 11.487 8.90902 11.909C8.48706 12.3309 8.25001 12.9032 8.25001 13.5V14.25M1.65534 11.4696L11.4697 1.65522C11.7625 1.36232 12.2374 1.36232 12.5303 1.65522L22.3446 11.4696C22.6375 11.7625 22.6375 12.2373 22.3446 12.5302L12.5303 22.3446C12.2374 22.6375 11.7625 22.6375 11.4697 22.3446L1.65534 12.5302C1.36245 12.2373 1.36245 11.7625 1.65534 11.4696Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(TrafficSign);
export default ForwardRef;
