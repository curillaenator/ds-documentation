import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Globe = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.51259 9H20.4874M3.51277 15H20.4875M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15.75 11.9995C15.75 16.8366 14.0711 20.7579 12 20.7579C9.92893 20.7579 8.25 16.8366 8.25 11.9995C8.25 7.16238 9.92893 3.24111 12 3.24111C14.0711 3.24111 15.75 7.16238 15.75 11.9995Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Globe);
export default ForwardRef;