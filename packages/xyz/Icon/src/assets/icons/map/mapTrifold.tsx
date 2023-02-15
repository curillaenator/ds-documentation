import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MapTrifold = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9 17.25L3 18.75V5.25L9 3.75M9 17.25L15 20.25M9 17.25V3.75M9 3.75L15 6.75M15 20.25V6.75M15 20.25L21 18.75V5.25L15 6.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(MapTrifold);
export default ForwardRef;
