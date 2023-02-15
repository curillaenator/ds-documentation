import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Eye = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 5.24921C4.5 5.24921 1.5 11.9999 1.5 11.9999C1.5 11.9999 4.5 18.7492 12 18.7492C19.5 18.7492 22.5 11.9999 22.5 11.9999C22.5 11.9999 19.5 5.24921 12 5.24921Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12.0001C15.75 9.92904 14.0711 8.25012 12 8.25012C9.92893 8.25012 8.25 9.92904 8.25 12.0001C8.25 14.0711 9.92893 15.75 12 15.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Eye);
export default ForwardRef;
