import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const EyeClosed = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18.858 11.9347L20.9964 15.6385M14.4546 13.9928L15.1215 17.775M9.53709 13.9915L8.87007 17.7743M5.13836 11.932L2.98965 15.6537M2.99993 9.83203C4.5761 11.783 7.46562 14.25 12 14.25C16.5343 14.25 19.4238 11.783 21 9.83205'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(EyeClosed);
export default ForwardRef;
