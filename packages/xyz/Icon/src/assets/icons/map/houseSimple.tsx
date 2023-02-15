import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HouseSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.0045 10.2765L12.504 3.45763C12.3659 3.33211 12.186 3.26257 11.9995 3.26257C11.8129 3.26258 11.633 3.33214 11.4949 3.45766L3.99545 10.2765C3.91814 10.3468 3.85637 10.4325 3.8141 10.5281C3.77183 10.6236 3.75 10.727 3.75 10.8315V19.4997C3.75 19.6986 3.82902 19.8894 3.96967 20.0301C4.11032 20.1707 4.30109 20.2497 4.5 20.2497H19.5C19.6989 20.2497 19.8897 20.1707 20.0303 20.0301C20.171 19.8894 20.25 19.6986 20.25 19.4997V10.8315C20.25 10.727 20.2282 10.6236 20.1859 10.5281C20.1436 10.4325 20.0818 10.3468 20.0045 10.2765Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(HouseSimple);
export default ForwardRef;
