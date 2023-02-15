import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Crop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M5.99941 6H2.25018M6.00013 2.25V18.0001H21.7501M18.0002 15.0001V6H8.99951M18.0002 21.7501V18.0001'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Crop);
export default ForwardRef;
