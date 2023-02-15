import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const AlignTop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.2503 3.74933H3.75031M18.75 7.50002V16.5C18.75 16.9142 18.4142 17.25 18 17.25H14.25C13.8358 17.25 13.5 16.9142 13.5 16.5V7.50002C13.5 7.08581 13.8358 6.75002 14.25 6.75002H18C18.4142 6.75002 18.75 7.08581 18.75 7.50002ZM5.99998 6.75002H9.74998C10.1642 6.75002 10.5 7.08581 10.5 7.50002V20.25C10.5 20.6642 10.1642 21 9.74998 21H5.99998C5.58576 21 5.24998 20.6642 5.24998 20.25V7.50002C5.24998 7.08581 5.58576 6.75002 5.99998 6.75002Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(AlignTop);
export default ForwardRef;
