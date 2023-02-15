import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Faders = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.0001 11.25L12.0001 20.25M12.0001 3.75L12.0001 8.25M18.7501 18.75L18.7502 20.25M18.7502 3.75L18.7501 15.75M21.0001 15.75H16.5001M5.25014 15.75L5.25005 20.25M5.25005 3.75L5.25014 12.75M3.00012 12.75H7.50012M14.2501 8.25H9.75012'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Faders);
export default ForwardRef;
